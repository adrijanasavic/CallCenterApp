const express = require("express");
const router = express.Router();
router.use(checkUser);

router.get("/", require("../controlers/operater/operaterController"));

router.post("/newTerms", require("../controlers/operater/newTerm"));

function checkUser(req, res, next) {
  let user = req.session.user;
  if (user) {
    if (user.role == "operater") {
      next();
    } else {
      res.redirect("/");
    }
  } else {
    res.redirect("/");
  }
}

module.exports = router;
