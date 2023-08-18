import axios from "axios";
import { authServerHost } from "../config";
import { Next, Context } from "koa";

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
    const res = await axios.post(tokenUrl, { token })
    if (res.status === 200 && res.data.success) {
      await next();
    }
  } catch (e) {
    ctx.status = 500;
    ctx.body = "error";
  }
};
