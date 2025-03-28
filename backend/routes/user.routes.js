const express = require("express");
const router = express.Router();
const { body } = require("express-validator");
const userController = require("../controllers/user.controller");

router.post(
  "/register",
  [
    body("email").isEmail().withMessage("Invalid Email"),
    body("fullname.firstname")
      .isLength({ min: 3 })
      .withMessage("First name must be 3 character long"),
    body("password").isLength({ min: 4 }),
    withMessage("Password must be 4 character long."),
  ],
  userController.registerUser
);

module.export = router;
