const express = require('express');
const router = express.Router();
// const UserModel= require("../models/userModel.js")
const UserController= require("../controllers/userController")
const BookController= require("../controllers/bookController")
const commonMW = require ("../middlewares/commonMiddlewares")






router.post("/createBook", BookController.createBook  )

router.post("/createUser", UserController.createUser  )

router.get("/getUsersData", UserController.getUsersData)



module.exports = router;