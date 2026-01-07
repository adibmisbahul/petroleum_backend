const express = require("express");
const router = express.Router();

const userController = require("../controller/userController");

router.get("", userController.handleLoginUser);

module.exports = router;
