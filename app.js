const express = require("express");
const app = express();
const port = 8010;
const session = require("express-session");

const indexRouter = require("./routes");

app.set("view engine", "ejs");
app.use("/views", express.static(__dirname + "./views"));
app.use("/static", express.static(__dirname + "/static"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(
  session({
    secret: "secretKey",
    resave: false,
    saveUninitialized: true,
    name: "rolling_paper",
  })
);

app.listen(port, () => console.log(`http://localhost:${port}`));

app.use("/", indexRouter);

app.get("*", (req, res) => {
  res.render("404");
});
