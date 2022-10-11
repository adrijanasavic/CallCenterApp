const express = require("express");
const router = express.Router();
router.use(checkUser);

router.get("/", (req, res) => {
  res.render("konsultant/index");
});
function checkUser(req, res, next) {
  let user = req.session.user;
  if (user) {
    if (user.role == "konsultant") {
      next();
    } else {
      res.redirect("/");
    }
  } else {
    res.redirect("/");
  }
}

module.exports = router;
