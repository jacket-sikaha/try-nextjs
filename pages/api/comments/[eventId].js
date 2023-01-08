// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { addComments, findAllComments } from "../../../sql/db-util";

export default async function handler(req, res) {
  const eventId = req.query.eventId;

  if (req.method === "POST") {
    const { email, name, text } = req.body;
    if (
      !email.includes("@") ||
      !name ||
      name.trim() == "" ||
      !text ||
      text.trim() == ""
    ) {
      res.status(422).json({ message: "Invalid input." });
      return;
    }
    const newComment = {
      email,
      name,
      text,
      eventId,
    };

    try {
      const result = await addComments(newComment);
      newComment.id = result.insertedId;
      res.status(201).json({ message: "Added comment.", comment: newComment });
    } catch (error) {
      res.status(500).json({ message: "database error! ", error: error.name });
    }
  }
  if (req.method === "GET") {
    // const dummyList = [
    //   { id: "c1", name: "Max", text: "A first comment!" },
    //   { id: "c2", name: "Manuel", text: "A second comment !" },
    // ];
    try {
      const result = await findAllComments();
      res.status(201).json({ comments: result });
    } catch (error) {
      res
        .status(500)
        .json({ message: "database error! ", error: error.name, comments: [] });
    }
  }
}
