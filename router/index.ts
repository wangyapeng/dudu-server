const Router = require('koa-router');
import { addNewRoomType, deleteRoomType, getRoomTypeList } from '../controller/RoomType';
import { Context } from 'koa';
const router = new Router();

// 指定一个url匹配
router.get('/', async (ctx: Context) => {
    ctx.type = 'html';
    ctx.body = '<h1>hello world!</h1>';
})


router.post('/roomType',addNewRoomType)
router.get('/roomType',getRoomTypeList)
router.delete('/roomType',deleteRoomType)
module.exports = router;