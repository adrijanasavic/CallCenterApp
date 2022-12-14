const mongojs = require("mongojs");

const db = mongojs("callCenter", ["users"]);

const loginControler = (req, res) => {
  // preuzeti podatke
  let { firstName, password } = req.body;
  // let nameForm = req.body.name;
  // let passForm = req.body.password;
  console.log(req.body);

  // db.users.find({ firstName: nameForm, password: passForm }, (err, docs) => {
  db.users.find({ firstName, password }, (err, docs) => {
    if (err) {
      console.log("Greska");
      res.redirect("/");
    } else {
      if (docs.length === 1) {
        // pronadji korisnika
        let user = docs[0];

        req.session.user = user;
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
        // podaci nisu tacni
        res.redirect("/");
      }
    }
  });
};

module.exports = loginControler;
