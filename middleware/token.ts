import axios from "axios";
import { authServerHost } from "../config";
import { Next, Context } from "koa";
import Errors from "../exception";

module.exports = (option: any) => async (ctx: Context, next: Next) => {
  if (ctx.url.includes("token")) {
    await next();
  } else {
    const token = (ctx.request.header["authorization"] || "")
      .replace("Bear", "")
      .trim();
    if (!token) {
      throw new Errors.AuthFailed("未授权", 401);
    }
    const res = await axios.get(`${authServerHost}/auth/verityAppToken`, {
      params: { token },
      headers: { Authorization: `Bear ${token}` },
    });
    if (res.status === 200) {
      await next();
    }
  }
};
