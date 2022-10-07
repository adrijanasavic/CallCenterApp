const express = require("express");
const router = express.Router();

router.use("/", require("./home"));

router.use("/login", require("../controlers/loginControler"));

router.use("/admin", require("./admin"));

router.use("/logout", require("./logout"));
module.exports = router;
