const mongojs = require("mongojs");

const db = mongojs("callCenter", ["city"]);

const deleteCity = (req, res) => {
  let id = req.params.id;
  db.city.remove({ _id: mongojs.ObjectID(id) }, (err, docs) => {
    if (err) {
      res.send(false);
    } else {
      res.send(true);
    }
  });
};

module.exports = deleteCity;
