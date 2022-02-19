const express = require("express");
const server = express();
const path = require("path");
const port = 3000;
const middleWare = require("./middleware.js");

server.use(express.static(path.resolve(__dirname, "pages")));
server.use("/", middleWare);

server.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "access.json"));
});

server.listen(port, () => {
  console.log(`Server's port is localhost:${port}`);
});

server.get("/download", (req, res) => {
  res.download(path.resolve(__dirname, "access.json"));
});
