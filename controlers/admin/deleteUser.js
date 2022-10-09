const mongojs = require("mongojs");

const db = mongojs("callCenter", ["users"]);

const deleteUser = (req, res) => {
  let id = req.params.id;
  db.users.remove({ _id: mongojs.ObjectID(id) }, (err, docs) => {
    if (err) {
      res.send(false);
    } else {
      res.send(true);
    }
  });
};

module.exports = deleteUser;
