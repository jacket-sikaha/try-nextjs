// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  if (req.method === "POST") {
    const userEmail = req.body.email;

    // 服务端验证
    if (!userEmail || !userEmail.includes("@")) {
      res.status(422).json({ message: "Invalid email address." });
      return;
    }
    console.log("userEmail", userEmail);
    res.status(201).json({ message: "Signed up! " });
  }
}
