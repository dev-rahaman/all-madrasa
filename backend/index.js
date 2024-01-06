const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config();
const { MongoClient, ServerApiVersion } = require("mongodb");
const port = 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Run the server for test
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// connect to MongoDB
const uri = `mongodb+srv://${process.env.DATABASE_USERNAME}:${process.env.DATABASE_PASSWORD}@cluster0.heig7t2.mongodb.net/?retryWrites=true&w=majority`;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

// Collections
let usersCollection;
let postsCollection;

// Middleware to set up the usersCollection before handling requests
app.use(async (req, res, next) => {
  try {
    usersCollection = req.app.locals.usersCollection;
    postsCollection = req.app.locals.postsCollection;
    next();
  } catch (error) {
    console.error("Middleware error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// ---------------------------- Route ----------------------------
const registrationRoute = require("./routes/registration");
const loginRoute = require("./routes/login");
const articleRoute = require("./routes/article");

app.use("/registration", registrationRoute);
app.use("/login", loginRoute);

// Posts
app.use("/add-article", articleRoute);

// Start the server after connecting to MongoDB
async function run() {
  try {
    await client.connect();
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );

    // Assign the collection after connecting
    usersCollection = client.db("SocialHub").collection("Users");
    postsCollection = client.db("SocialHub").collection("Posts");
    // Set up app.locals to make the usersCollection available to other parts of the app
    app.locals.usersCollection = usersCollection;
    app.locals.postsCollection = postsCollection;

    // Start the server
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  } catch (error) {
    console.error("MongoDB connection error:", error);
  }
}

run().catch(console.dir);
