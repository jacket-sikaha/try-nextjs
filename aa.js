// import { connectToDatabase } from "./asd";
const { connectToDatabase } = require("./asd");
async function name(params) {
  const a = await connectToDatabase();
  const movies = a.db("sample_mflix").collection("movies");
  // Query for a movie that has the title 'Back to the Future'
  const query = { title: "111111111111Back to the Future" };
  const movie = await movies.insertOne(query);
  console.log(movie);
  await a.close();
  return;
}
console.log(name());
console.log("connectToDatabase", connectToDatabase);
