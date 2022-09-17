const express = require("express");
const router = express.Router();

router.use("/", require("./home"));

router.use("/login", require("../controlers/loginControler"));

router.use("/admin", (req, res) => {
  res.send("Admin section");
});
module.exports = router;
