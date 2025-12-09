const express = require("express");
const cors = require("cors");
const items = require("./data/items");

const app = express();
app.use(cors());

let currentIndex = 0;

function sendResponse(res) {
  res.json({
    index: currentIndex,
    item: items[currentIndex],
    total: items.length
  });
}

app.get("/item", (req, res) => {
  sendResponse(res);
});

app.get("/item/next", (req, res) => {
  currentIndex = (currentIndex + 1) % items.length;
  sendResponse(res);
});

app.get("/item/prev", (req, res) => {
  currentIndex = (currentIndex - 1 + items.length) % items.length;
  sendResponse(res);
});

app.get("/item/:id", (req, res) => {
  let id = parseInt(req.params.id);

  if (isNaN(id) || id < 0 || id >= items.length) {
    return res.status(404).json({ error: "Invalid item index" });
  }

  currentIndex = id;
  sendResponse(res);
});

app.listen(3000, () => {
  console.log("Backend running on http://localhost:3000");
});
