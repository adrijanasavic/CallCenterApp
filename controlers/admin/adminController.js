const mongojs = require("mongojs");

const db = mongojs("callCenter", ["users", "product", "city"]);

const adminController = (req, res) => {
  db.users.find({}, (err, users) => {
    const operater = users.filter((user) => user.role === "operater");
    const konsultant = users.filter((user) => user.role === "konsultant");

    db.product.find({}, (err, product) => {
      db.city.find({}, (err, city) => {
        res.render("admin/adminDashboard", {
          operater: operater,
          konsultant: konsultant,
          product: product,
          city: city,
        });
      });
    });
  });
};

module.exports = adminController;
