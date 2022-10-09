const mongojs = require("mongojs");

const db = mongojs("callCenter", ["users"]);

const saveUser = (req, res) => {
  let firstName = req.body.firstName;
  let lastName = req.body.lastName;
  let password = req.body.password;
  let role = req.body.role;

  db.users.insert(
    {
      firstName: firstName,
      lastName: lastName,
      password: password,
      role: role,
    },
    (err, docs) => {
      res.redirect("/admin");
    }
  );
};

module.exports = saveUser;
