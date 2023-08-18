
const Koa = require('koa');
const app = new Koa();
const router = require('./router');
const koaBody = require('koa-body');
const token = require('./middleware/token');


app.use(token())
app.use(koaBody())
app.use(router.routes()).use(router.allowedMethods());
app.listen(3110, () => {
    console.log('Server is running');
})
