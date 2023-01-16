const { MongoClient } = require("mongodb");
// 连接mongodb运行环境是nodejs
const uri = `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_clustername}.duc0hkz.mongodb.net/?retryWrites=true&w=majority`;
async function addContact(newContact) {
  const client = new MongoClient(uri);
  try {
    const contact = client.db("nextjs_blog").collection("messages");
    return await contact.insertOne(newContact);
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

export { addContact };
