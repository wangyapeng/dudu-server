import { Context } from "koa";

const Koa = require('koa');
const app = new Koa();
const router = require('./router');
const cookie = require('koa-cookie');
const koaBody = require('koa-body');
const token = require('./middleware/token');
const catchError = require('./middleware/catchErr');
const logger = require('koa-logger');

app.use(catchError())
app.use(logger())
app.use(koaBody())
app.use(cookie.default())
app.use(token())
app.use(router.routes()).use(router.allowedMethods());

app.on("error", async(err: Error, ctx:Context) => {
    // console.log(err, ctx);
})

app.listen(3110, () => {
    console.log('Server is running');
})
