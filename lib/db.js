const { MongoClient } = require("mongodb");

export async function connectToDatabase() {
  const client = new MongoClient(
    "mongodb+srv://maximilian:ZbJcz3dJ88LSUMlM@cluster0.ntrwp.mongodb.net/auth-demo?retryWrites=true&w=majority"
  ).connect();
  return client;
}
