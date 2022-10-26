const express = require('express');
const router = express.Router();
const BookController = require("../controllers/bookController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})



router.post("/createBook", BookController.createBook)

router.get("/bookList", BookController.getBooksData)

router.post("/getBooksInYear", BookController.getWithYear)

router.post("/getParticularBooks", BookController.getWithany)

router.get("/getXINRBooks", BookController.getWithPrise)

router.get("/getRandomBooks", BookController.getWithPages)

module.exports = router;