// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { registerEmail } from "../../sql/db-util";
// 类似express js的api路由开发
// 类似客户端路由一样，按照文件结构可以划分多种不同的api，支持传递多个参数给对应文件下的路由
// 数据库的相关操作建议是在服务端进行，不把内容暴露在客户端
export default async function handler(req, res) {
  if (req.method === "POST") {
    const userEmail = req.body.email;

    // 服务端验证
    if (!userEmail || !userEmail.includes("@")) {
      res.status(422).json({ message: "Invalid email address." });
      return;
    }
    try {
      await registerEmail(userEmail);
      res.status(201).json({ message: "Signed up! " });
    } catch (error) {
      res.status(500).json({ message: "database error! ", error: error.name });
    }
  }
}
