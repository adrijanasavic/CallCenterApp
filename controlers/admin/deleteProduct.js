const mongojs = require("mongojs");

const db = mongojs("callCenter", ["product"]);

const deleteProduct = (req, res) => {
    let id = req.params.id;
    db.product.remove({ _id: mongojs.ObjectID(id) }, (err, docs) => {
        if (err) {
            res.send(false);
        } else {
            res.send(true);
        }
    })

}

module.exports = deleteProduct;