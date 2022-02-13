const express = require("express");
const server = express();

const path = require("path");

const port = 3000;

server.listen(port, () => {
  console.log(`Стартанули наш сервер на порте ${port}`);
});

server.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "index.html"));
});

server.get("/", (req, res) => {
  res.send("Main Page");
});

server.get("/second", (req, res) => {
  res.send("Second Page");
});

server.get("/third", (req, res) => {
  res.send("third page");
});

console.log("borya pitux");
