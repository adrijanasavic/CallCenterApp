const mongojs = require("mongojs");

const db = mongojs("callCenter", ["users"]);

const operaterController = (req, res) => {
  let user = req.session.user;

  db.users.find({ role: "konsultant" }, (err, konsultant) => {
      db.city.find({}, (err, gradovi) => {
          db.terms.find({ operater: user._id }, (err, termini) => {
              console.log(termini);
              
            res.render("operater/index", {
                brojTermina: termini.length,
                user: user,
                konsultant: konsultant,
                gradovi: gradovi,
              });
        })
     
    });
  });
};

module.exports = operaterController;
