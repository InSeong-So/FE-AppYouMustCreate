const express = require("express");
const router = express.Router();

/* GET home page. */
router.get("/", (req, res, next) => {
  res.json({ title: "SIS-RESTfulApi" });
});

// users
router.use("/v1", require("./v1"));
// todos
router.use("/v2", require("./v2"));

module.exports = router;
