const express = require("express");
const router = express.Router();
const Articles = require("./Articles_Model");
const { body, validationResult } = require("express-validator");

// ROUTE 1: Get all Articles using GET: "/api/articles/fetchallarticles".
router.get("/fetchallarticles", async (req, res) => {
  try {
    const articles = await Articles.find();
    res.json(articles);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error Occured");
  }
});

// ROUTE 2: Add a new Note using POST: "/api/articles/addarticle".
router.post(
  "/addarticle",
  [
    body("title", "Enter a valid title").isLength({ min: 3 }),
    body(
      "description",
      "Description should be of atleast 5 characters"
    ).isLength({ min: 5 }),
  ],
  async (req, res) => {
    try {
      const { title, description } = req.body;

      // If there are errors return Bad request & errors.
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      const article = new Articles({
        title,
        description,
      });
      const savedArticle = await article.save();

      res.json(savedArticle);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error Occured");
    }
  }
);

// ROUTE 3: Update an existing Note using PUT: "/api/articles/updatearticle/:id".
router.put("/updatearticle/:id", async (req, res) => {
  const { title, description } = req.body;

  try {
    // Create a newNote object
    const newArticle = {};
    if (title) {
      newArticle.title = title;
    }
    if (description) {
      newArticle.description = description;
    }

    // Find the note to be updated & update it
    let article = await Articles.findById(req.params.id);
    if (!article) {
      return res.status(404).send("Not Found");
    }

    article = await Articles.findByIdAndUpdate(
      req.params.id,
      { $set: newArticle },
      { new: true }
    );
    res.json(article);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error Occured");
  }
});

// ROUTE 4: Delete an existing Note using DELETE: "/api/articles/deletearticle/:id".
router.delete("/deletearticle/:id", async (req, res) => {
  try {
    // Find the note to be updated & update it
    let article = await Articles.findById(req.params.id);
    if (!article) {
      return res.status(404).send("Not Found");
    }

    article = await Articles.findByIdAndDelete(req.params.id);
    res.json({ Success: "Article has been deleted" });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error Occured");
  }
});

module.exports = router;
