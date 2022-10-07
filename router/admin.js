const express = require("express");
const router = express.Router();

router.get("/", require("../controlers/admin/adminController"));

router.get("/create/user", (req, res) => {
    res.render("admin/adminCreateForm.ejs")
});
module.exports = router;