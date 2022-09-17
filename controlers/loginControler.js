const mongojs = require("mongojs");

const db = mongojs("callCenter", ["users"]);

const loginControler = (req, res) => {
  // preuzeti podatke
  let nameForm = req.body.name;
  let passForm = req.body.password;

  db.users.find({ firstName: nameForm, password: passForm }, (err, docs) => {
    if (err) {
      console.log("Greska");
      res.redirect("/");
    } else {
      if (docs.length === 1) {
        // pronadji korisnika
        let user = docs[0];
        if (user.role == "admin") {
          res.redirect("/admin");
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