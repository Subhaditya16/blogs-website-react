const express = require("express");
const parser = require("body-parser");
const uuid = require("uuid");

const app = express();
app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));

const blogs = [];

// GET for normal route
app.get("/", (req, res) => {
  res.send("Hi");
});

// GET Blogs
app.get("/blogs", (req, res) => {
  res.send(blogs);
});

// POST Blogs
app.post("/blogs", (req, res) => {
  const body = req.body;
  const id = uuid.v4();
  blogs.push({
    id: id,
    body,
  });
  res.send("Data created successfully");
});

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`Server listening to port ${port}`);
});
