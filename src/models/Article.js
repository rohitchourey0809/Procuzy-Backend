const mongoose = require("mongoose");

const articleSchema = new mongoose.Schema({
  title: String,
  author: String,
  publicationDate: String,
  url: String,
});

const Article = mongoose.model("Article", articleSchema);

module.exports = Article;
