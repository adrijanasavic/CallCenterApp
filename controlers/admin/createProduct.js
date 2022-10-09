const mongojs = require("mongojs");

const db = mongojs("callCenter", ["users", "product"]);

const createProduct = (req, res) => {
  let product = req.body.product;
  let price = req.body.price;

  db.product.insert({ product: product, price: price }, (err, docs) => {
    res.redirect("/admin");
  });
};

module.exports = createProduct;
