import { Room } from "../entites/Room";
import { AppDataSource } from "../controller";
import { Context } from "koa";
import Koa from 'koa';
import { RoomType } from "../entites/RoomType";

export async function addNewRoom(ctx: Koa.Context) {
    //@ts-ignore
    const body = ctx.request.body;
    const { userId } = ctx.request.query;
    const roomRepository = AppDataSource.getRepository(Room);
    const typeRepository = AppDataSource.getRepository(RoomType);
    let room = new Room();

    room = body;

    const roomType = await typeRepository.findOneBy({value: body.roomType})
    //@ts-ignore
    room.userId = userId;
    room.tenantId = 110110;
    room.roomType = roomType as RoomType;
    const user = await roomRepository.save(room);
    console.log(user, roomType)
    if (user) {
        ctx.status = 200;
        ctx.body = {
            success: true,
            message: "创建房间成功"
        }
        return
    }
}


export async function getRoomList(ctx: Context) {
    const query = ctx.request.query;
    const { userId } = query;
    try {
        const repository = AppDataSource.getRepository(Room);

        const [list, listCount] = await repository.findAndCountBy({
             //@ts-nocheck
            userId: Number(userId)
        })
        //.find({
           // relations: ["roomType",],
        //});

        ctx.status = 200;
        ctx.body = {
            success: true,
            data: list
        }
    } catch(e) {
        ctx.status = 500;
        ctx.body = {
            error: false,
            message: e.message
        }
    }
}



export async function deleteRoom(ctx: Context) {
    const { id } = ctx.request.query;
    try {
        const typeRepository = AppDataSource.getRepository(Room);
        const ret = await typeRepository.delete({id:Number(id)});
        if (ret) {
            ctx.status = 200;
            ctx.body = {
                success: true,
                message: "删除成功~"
            }
        }
    } catch(e) {
        ctx.status = 500;
        ctx.body = {
            error: true,
            message: e.message
        }
    }
}