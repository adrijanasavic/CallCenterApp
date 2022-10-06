const express = require("express");
const router = express.Router();

router.get("/", require("../controlers/admin/adminController"));
module.exports = router;