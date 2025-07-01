const {log} = require("console");
const express = require("express");
const app = express();
const port = 8080;
const path = require("path");
const {v4: uuidv4} = require("uuid");
// ⇨ '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed'
const methodOverride = require("method-override");
app.use(express.urlencoded({extended: true}));
app.use(methodOverride("_method"));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));
app.get("/posts", (req, res) => {
  res.render("index.ejs", {posts});
});
app.get("/posts/new", (req, res) => {
  res.render("new.ejs");
});

app.post("/posts", (req, res) => {
  let {username, content} = req.body;
  let id = uuidv4();
  posts.push({id, username, content});
  res.redirect("/posts");
});

app.get("/posts/:id", (req, res) => {
  let {id} = req.params;
  let post = posts.find((p) => id === p.id);
  console.log(post);
  res.render("show.ejs", {post});
});

app.patch("/posts/:id", (req, res) => {
  let {id} = req.params;
  let newcontent = req.body.content;
  let post = posts.find((p) => id === p.id);
  post.content = newcontent;
  console.log(post);
  res.redirect("/posts");
});

app.get("/posts/:id/edit", (req, res) => {
  let {id} = req.params;
  let post = posts.find((p) => p.id === id);
  if (!post) return res.status(404).send("Post not found");
  res.render("edit.ejs", {post});
});5

app.delete("/posts/:id", (req, res) => {
  let {id} = req.params;
  posts = posts.filter((p) => p.id !== id);
  res.redirect("/posts");
});
let posts = [
  {
    id: uuidv4(),
    username: "neotech",
    content: "I Love coding",
  },
  {
    id: uuidv4(),
    username: "James bone",
    content: "one million , two million",
  },
  {
    id: uuidv4(),
    username: "Pablo escolbar",
    content: "5 million",
  },
];

app.listen(port, () => {
  console.log("listening to port : 8080");
});
