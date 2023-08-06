import { authServerHost } from "../config";
import { Next, Context } from "koa";
const request = require("request");

module.exports = (option: any) => async (ctx: Context, next: Next) => {
  try {
    if (ctx.url === "/") {
      await next();
    }
    const tokenUrl = `${authServerHost}/auth/verityToken`;
    //@ts-ignore
    const token = (ctx.request.header["authorization"] || "")
      .replace("Bear", "")
      .trim();
    request.post(
      tokenUrl,
      { token },
      async function (error: any, response: any, body: any) {
        if (body.success) {
          await next();
        }
      }
    );
  } catch (e) {
    ctx.status = 500;
    ctx.body = "error";
  }
};
