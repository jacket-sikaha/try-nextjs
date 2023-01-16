// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { addContact } from "../../sql/db-util";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { email, name, message } = req.body;

    if (
      !email ||
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !message ||
      message.trim() == ""
    ) {
      res.status(422).json({ message: "Invalid input." });
      return;
    }

    //Store it in a database
    const newMessage = {
      email,
      name,
      message,
    };
    try {
      const result = await addContact(newMessage);
      newMessage.id = result.insertedId;
    } catch (error) {
      res.status(500).json({ message: "Storing message failed!" });
      return;
    }
    res
      .status(201)
      .json({ message: "Successfully stored message ! ", message: newMessage });
  }
}
