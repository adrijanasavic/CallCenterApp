const mongojs = require("mongojs");

const db = mongojs("callCenter", ["users"]);

const adminController = (req, res) => {
    res.render("admin/adminDashboard");
};

module.exports = adminController;
