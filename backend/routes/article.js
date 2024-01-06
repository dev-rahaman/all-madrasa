const express = require("express");
const router = express.Router();

router.post("/", async (req, res) => {
  const postsCollection = req.app.locals.postsCollection;
  const { title, content, tags } = req.body;

  try {
    await postsCollection.insertOne({
      title,
      content,
      tags,
    });
    res.status(201).json({ message: "You'r Article Posted Successfully" });
  } catch (error) {
    console.error("Registration error:", error);
    res.status(500).json({ error: "Internal Server to Post Your Article" });
  }
});

module.exports = router;
