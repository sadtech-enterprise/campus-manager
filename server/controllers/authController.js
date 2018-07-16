const bcrypt = require("bcrypt");

const createUser = (req, res, next) => {
  const db = req.app.get("db");
  const { username, email, password } = req.body;

  console.log(req.body);

  db.new_user([username, email, bcrypt.hashSync(password, 10)])
    .then(user => {

      req.session.user = delete user.password;
      res.status(200).json(user[0]);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });

};

const verifyUser = (req, res, next) => {
  const { userName, password, email } = req.body;

  console.log(req.body);

  req.app
    .get("db")
    .get_users()
    .then(users => {
      const filteruser = users.filter(e => {
        return e.user_name === username || e.user_email === email;
        //userName is going to either be an email or username
      });
      if (!filteruser[0]) {
        return res.status(401).send("Email or username does not exist");
      } else {
           if (!req.session.user.user_name || req.method == "DELETE") {

          req.session.user = _.omit(filteruser[0], ["password"]);
          return filtered[0];
        } else {
          return res.status(400).send({ message: "Already logged in" });
        }
      }
    })
    .then(credentials => {
      if (
        credentials &&
        bcrypt.compareSync(password, credentials.user_password)
      ) {
        if (req.method !== "DELETE") {
          return res.status(200).send(req.session.user);
        } else {
          res.locals.verifiedUser = req.session.user;
          next();
        }
      } else {
        return res.status(401).send({ message: "Incorrect password" });
      }
    })
    .catch(err => {
      console.log(err);
    });
};

const getUser = (req, res) => {
  if (!req.session.user.user_name) {
    console.log("getuser err");
    return res
      .status(401)
      .send({ message: "Unauthorized. Please login or register" });
  } else {
    return res.status(200).send(req.session.user);
  }
};

const confirmToken = (req, res) => {};
const resendToken = (req, res) => {};

module.exports = {
  createUser,
  getUser,
  verifyUser,
  confirmToken,
  resendToken
};
