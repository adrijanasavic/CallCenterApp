const express = require("express");
const app = express();
const router = require("./router");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(express.static(__dirname + "/public"));
app.set("view engine", "ejs");

app.use("/", router);

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
