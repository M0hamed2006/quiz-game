const express = require("express");
const app = express();
const path = require("path");

app.use(express.json());
app.use(express.static(__dirname));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.post("/chat", (req, res) => {
  res.json({ reply: "رد تجريبي 😄" });
});

app.listen(3000, () => {
  console.log("🚀 السيرفر شغال على http://localhost:3000");
});
