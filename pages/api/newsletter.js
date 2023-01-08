// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { registerEmail } from "../../sql/db-util";

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
