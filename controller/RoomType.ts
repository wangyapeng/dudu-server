import { RoomType } from "../entity/RoomType";
import { AppDataSource } from "../controller";
import { Context } from "koa";
import { getConnection, getManager } from "typeorm";

export async function addNewRoomType(ctx: Context) {

    //@ts-ignore
    const body = ctx.request.body;
    const typeRepository = AppDataSource.getRepository(RoomType);
    let roomType = new RoomType();

    roomType = body;
    const user = await typeRepository.save(roomType);
    await (console.log('--------->', user, ctx))

    if (user) {
        ctx.status = 200;
        ctx.body = {
            success: true,
            message: "创建类型成功"
        }
        return
    }

    ctx.status = 500;
    ctx.body = {
        error: true,
    }
}


export async function getRoomTypeList(ctx: Context) {
    const query = ctx.request.query;

    const typeRepository = AppDataSource.getRepository(RoomType);

    const list = await typeRepository.find();

    ctx.status = 200;
    ctx.body = {
        success: true,
        data: list
    }
}



export async function deleteRoomType(ctx: Context) {
    const { id } = ctx.request.query;
    const typeRepository = AppDataSource.getRepository(RoomType);
    const ret = await typeRepository.delete(Number(id));
    if (ret) {
        ctx.status = 200;
        ctx.body = {
            success: true,
            message: "删除成功~"
        }
    }
}