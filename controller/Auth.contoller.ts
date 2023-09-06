import axios from "axios";
import { Context } from "koa";

export async function getToken(ctx: Context) {
  const params = ctx.request.query;
  const token = (ctx.request.header["authorization"] || "")
  .replace("Bear", "")
  .trim();
  const res = await axios.get("http://localhost:9999/auth/token", { 
    params,
    headers: {Authorization: `Bear ${token}`}
  });

  if (res.data.error) {
    ctx.status = 200;
    ctx.body = {
      error: true,
      errorMessag: "登录失败"
    };
    return
  }
  ctx.cookies.set("appUserToken", `${res.data}`, {
    domain: "dudu.dq.com",
    path: "/", // 有效范围
    httpOnly: false, // 只能在服务器修改
    maxAge: 24 * 60 * 60 * 1000,
  });
  ctx.status = 200;
  ctx.body = res.data;
}
