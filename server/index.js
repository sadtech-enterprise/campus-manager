var express = require("express");
var bodyParser = require("body-parser");
const massive = require("massive");
require("dotenv").config();
const cors = require("cors");
const session = require("express-session");
const authRoute = require(`${__dirname}/routes/authRoute`);

const app = express();

app.use(bodyParser.json());
app.use(cors());

massive(process.env.CONNECTION_STRING).then(dbInstance =>
  app.set("db", dbInstance)
);

app.use(
  session({
    secret: "HELLO",
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 1000 * 60 * 60
    }
  })
);

//EXPRESS
app.use("/api/auth", authRoute);

app.use((req, res, next) => {
  res.status(404).send({ message: "No route here! Try again." });
});

const port = 3001;
app.listen(port, () => {
  console.log(`listening on ${port}`);
});
