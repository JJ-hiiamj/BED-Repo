const express = require("express");
const app = express();
const PORT = 3000;


app.get("/", (req, res) => {
  res.send("Welcome to Homework API");
});

app.get("/intro", (req, res) => {
  res.send("My name is Jay, I am studying in Ngee Ann Poly, currently enrolled in Information Technology Course. I am in Hockey CCA.");
});

app.get("/name", (req, res) => {
  res.send("My name is Jay Ng");
});

app.get("/hobbies", (req, res) => {
  res.send("I enjoy playing video games, watching comedies, playing and watching Football (YNWA)");
});

app.get("/food", (req, res) => {
  res.send("Fried Bee Hoon and Home cooked food.");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});