import Router from 'koa-router';
import { getToken } from '../controller/Auth.contoller';
import { addNewRoom, deleteRoom, getRoomList } from '../controller/Room.controller';
import { addNewRoomType, deleteRoomType, getRoomTypeList } from '../controller/RoomType.controller';
import { Context } from 'koa';
const router = new Router();

// 指定一个url匹配
router.get('/', async (ctx: Context) => {
    ctx.type = 'html';
    ctx.body = '<h1>hello world!</h1>';
})

router.get('/token', getToken)
router.post('/roomType',addNewRoomType)
router.get('/roomType',getRoomTypeList)
router.delete('/roomType',deleteRoomType)

router.post('/room', addNewRoom);
router.get('/room',getRoomList);
router.delete('/room',deleteRoom);

module.exports = router;