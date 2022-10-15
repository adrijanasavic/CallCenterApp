const mongojs = require("mongojs");

const db = mongojs("callCenter", ["users"]);

const newTerm = (req, res) => {


    let user = req.session.user;

    db.terms.insert({
        ...req.body,
        active: true,
        costContact: 0,
        entry: false,
        reason: "",
        product: "",
        operater:user._id
    }, (err) => {
        if (err) {
            res.render("error_page")
        } else {
            res.redirect("/operater")
        }
    })
};

module.exports = newTerm;
