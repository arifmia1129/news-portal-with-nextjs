const { MongoClient, ServerApiVersion } = require("mongodb");
const uri =
  "mongodb+srv://news:123abc@cluster0.scte0by.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run(req, res) {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    const newsCollection = await client.db("newsPortal").collection("news");
    if (req.method === "GET") {
      const allNews = await newsCollection.find().toArray();
      res.status(200).json({
        success: true,
        statusCode: 200,
        message: "Successfully retrieved all news",
        data: allNews,
      });
    }

    if (req.method === "POST") {
      const result = await newsCollection.insertOne(req.body);
      res.status(201).json({
        success: true,
        statusCode: 201,
        message: "Successfully created news",
        data: result,
      });
    }
  } catch (error) {
    console.log(error.message);
  }
}

export default run;
