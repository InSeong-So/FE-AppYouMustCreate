const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  return res.json({ message: "v2 pong" });
});

router.use("/todos", require("./todo.route"));

module.exports = router;
