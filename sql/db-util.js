const { MongoClient } = require("mongodb");
// 连接mongodb运行环境是nodejs
const uri =
  "mongodb+srv://<username>:<password>@<database>.duc0hkz.mongodb.net/?retryWrites=true&w=majority";

async function registerEmail(email) {
  const client = new MongoClient(uri);
  try {
    const emails = client.db("nextjs_newsletter").collection("emails");
    await emails.insertOne({ email });
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}

async function addComments(comment) {
  const client = new MongoClient(uri);
  try {
    const comments = client.db("nextjs_events").collection("comments");
    return await comments.insertOne({ ...comment });
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}

async function findAllComments() {
  const client = new MongoClient(uri);
  try {
    // 将查找结果转换成数组并以id进行降序排序
    const documents = await client
      .db("nextjs_events")
      .collection("comments")
      .find()
      .sort({ _id: -1 })
      .toArray();
    return documents;
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
// async function run() {
//   try {
//     const database = client.db("sample_mflix");
//     const movies = database.collection("movies");
//     // Query for a movie that has the title 'Back to the Future'
//     const query = { title: "Back to the Future" };
//     const movie = await movies.findOne(query);
//     console.log(movie);
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
// run().catch(console.dir);

export { registerEmail, addComments, findAllComments };
