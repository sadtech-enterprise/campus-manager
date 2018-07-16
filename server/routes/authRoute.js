const express = require("express");
const router = express.Router();

const {
  createUser,
  getUser,
  verifyUser,
  confirmToken,
  resendToken
} = require(`${__dirname}/../controllers/authController`);

router.get("/user", getUser);
router.post("/register", createUser);
router.post("/login", verifyUser);
router.post("/confirmation", confirmToken);
router.post("/resend", resendToken);

module.exports = router;
