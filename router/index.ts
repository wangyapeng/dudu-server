const Router = require('koa-router');
import { Context } from 'koa';
const router = new Router();

// 指定一个url匹配
router.get('/', async (ctx: Context) => {
    ctx.type = 'html';
    ctx.body = '<h1>hello world!</h1>';
})


module.exports = router;