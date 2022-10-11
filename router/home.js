const express = require("express");
const router = express.Router();

router.get("/", checkIsLoggedIn, (req, res) => {
  res.render("index");
});

function checkIsLoggedIn(req, res, next) {
  if ((req.session.user)) {
    let user = req.session.user;
    if (user.role == "admin") {
      res.redirect("/admin");
    } else if (user.role == "operater") {
      res.redirect("/operater");
    } else if (user.role == "konsultant") {
      res.redirect("/konsultant");
    } else {
      res.redirect("/");
    }
  } else {
    next();
  }
}
module.exports = router;
