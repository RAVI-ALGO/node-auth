const express = require("express");

const mainController  = require("../controller/user");

const router = express.Router();

router.get("/",mainController.home);
router.get("/register",mainController.register);
router.get("/login",mainController.getlogin);



router.post("/register",mainController.createUser)
router.post("/login",mainController.userLogin)
module.exports = router;