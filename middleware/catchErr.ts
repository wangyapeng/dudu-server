import { Context, Next } from "koa";
import Errors from '../exception'

module.exports = () => async (ctx: Context, next: Next) => {
  try {
    await next();
    if (ctx.status === 404) {
      throw new Errors.NotFound('not found', 4000404);
    }
  } catch (err) {
    console.error('🕷 ----->', err.message);
    if (err.message === 'Request failed with status code 401') {
      ctx.status = 401;
      ctx.body = {
        error: true,
        errorMessage: "未授权"
      }
      return
    }

    if (err.errorCode) {
      // 如果是自己主动抛出的 HttpException类 错误
      ctx.status = err.status || err.code || 500;
      ctx.body = {
        code: err.code,
        message: err.message,
        errorCode: err.errorCode,
        request: `${ctx.method} ${ctx.path}`,
      };
    } else {
      ctx.app.emit("error", err, ctx);
    }
  }
};
