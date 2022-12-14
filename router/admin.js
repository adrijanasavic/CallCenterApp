const express = require("express");
const { route } = require("./logout");
const router = express.Router();
router.use(checkUser);

router.get("/", require("../controlers/admin/adminController"));

router.get("/create/user", (req, res) => {
  res.render("admin/adminCreateForm.ejs");
});

router.get("/create/city", (req, res) => {
  res.render("admin/cityCreateForm.ejs");
});

router.get("/create/product", (req, res) => {
  res.render("admin/productCreateForm.ejs");
});

router.get("/delete/user/:id", require("../controlers/admin/deleteUser"));

router.get("/delete/product/:id", require("../controlers/admin/deleteProduct"));

router.get("/delete/city/:id", require("../controlers/admin/deleteCity"));

router.post("/create/save", require("../controlers/admin/createUser"));

router.post("/create/city/save", require("../controlers/admin/createCity"));

router.post(
  "/create/product/save",
  require("../controlers/admin/createProduct")
);

function checkUser (req, res, next) {
  let user = req.session.user;
  if (user) {
    if (user.role == "admin") {
      next();
    } else {
      res.redirect("/");
    }
  } else {
    res.redirect("/");
  }
};

module.exports = router;
