const bcrypt = require("bcrypt");

const createUser = (req, res, next) => {
  const db = req.app.get("db");
  const { username, email, password } = req.body;

  console.log(req.body);

  db.add_user([username, email, bcrypt.hashSync(password, 10)])
    .then(user => {
      //   console.log(`creating user...`, user);
      req.session.user = delete user.password;
      res.status(200).json(user[0]);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });

  console.log(req.session.user);
};

const verifyUser = (req, res, next) => {
  const { userName, password, email } = req.body;
  //   console.log("finding user....");

  console.log(req.body);

  req.app
    .get("db")
    .get_users()
    .then(users => {
      console.log(users);
      //filter through the array of users that match either userName or email
      const filtered = users.filter(e => {
        return e.user_name === username || e.user_email === email;
        //userName is going to either be an email or username
      });
      //If no user matches the email or userName send 401 Unauthorized
      console.log(filtered[0]);
      if (!filtered[0]) {
        console.log("NO USERNAME");
        return res.status(401).send("Email or username does not exist");
      } else {
        //USER'S USERNAME OR EMAIL HAS BEEN VERIFIED BY THIS POINT

        if (!req.session.user.user_name || req.method == "DELETE") {
          /*If the user object is empty OR if the HTTP method is DELETE,
            put users info, except password, onto the req.session object
            then pass EVERYTHING to be handled as promise.*/

          req.session.user = _.omit(filtered[0], ["user_password"]);
          return filtered[0];
        } else {
          //Doesnt allow user to keep logging in.
          return res.status(400).send({ message: "Already logged in" });
        }
      }
    })
    .then(credentials => {
      //   console.log("cred: ", credentials);
      //compares provided password with hashed password in DB
      if (
        credentials &&
        bcrypt.compareSync(password, credentials.user_password)
      ) {
        // console.log(req.method);
        if (req.method !== "DELETE") {
          console.log("password confirmed...");
          console.log(req.session.user);
          return res.status(200).send(req.session.user);
          //user fully authenticated.
        } else {
          res.locals.verifiedUser = req.session.user;
          /*res.locals allows data to be passed between middlewares
          that happen to serve the request.*/
          next();
        }
      } else {
        //Password got rejected
        console.log("401 2");
        return res.status(401).send({ message: "Incorrect password" });
      }
    })
    .catch(err => {
      //good practice to ALWAYS log your errors.
      console.log(err);
    });
};

const getUser = (req, res) => {
  /*Grabs current user on sessions. No auth 
  required if session hasnt expired or been destroyed*/
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
