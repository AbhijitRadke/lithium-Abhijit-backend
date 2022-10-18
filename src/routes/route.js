const express = require('express');
const abc = require('../introduction/intro')
const router = express.Router();

router.get('/test-me', function (req, res) {
    console.log('My batch is', abc.name)
    abc.printName()
    res.send('My second ever api!')
});

router.get('/students', function (req, res) {
    console.log("The path params in the request are : ", req.params)
    let students = ['Sabiha', 'Neha', 'Akash']
    res.send(students)
})


// Example 1 for path params
router.get('/students/:studentName', function (req, res) {
    // ':' denotes that the following part of route is a variable
    // The value of this variable is what we are sending in the request url after /students
    // This value is set in the form of an object inside req.params
    // The object contain key value pairs
    // key is the variable in the route
    // value is whatever dynamic value sent in the request url
    let myParams = req.params

    // params attribute is fixed in a request object
    // params contains the path parameters object
    console.log("The path params in the request are : ", myParams)
    res.send('The full name is ' + myParams.studentName)
})

// Example 2 for path params
router.get('/student-details/:name', function (req, res) {
    let requestParams = req.params
    console.log("This is the request ", requestParams)
    let studentName = requestParams.name
    console.log('Name of the student is ', studentName)
    res.send('Dummy response')
})

router.get('/movies', function (req, res) {
    const movies = ["Harry Porter", "Back to the future", "Titanic", "Insaption"]
    res.send(movies)

})
router.get('/movies/:indexNumber', function (req, res) {
    const movies = ["Harry Porter", "Back to the future", "Titanic", "Insaption", "Pirates of the Caribbean", "Ice Age"]
    let index = req.params
    if (index.indexNumber < movies.length) {
        res.send(movies[index.indexNumber])
    } else {
        res.send("index number must be between 0 to " + (movies.length - 1))
    }
})



router.get('/films', function (req, res) {
    const films = [
        {
            id: 1,
            filmName: "pk"
        },
        {
            id: 2,
            filmName: "Bajirao Mastani"
        },
        {
            id: 3,
            filmName: "Tanhaji"
        },
        {
            id: 4,
            filmName: "Pushpa"
        }
    ]

    res.send(films)
})


router.get('/films/:filmId', function (req, res) {
    const films = [
        {
            id: 1,
            filmName: "pk"
        },
        {
            id: 2,
            filmName: "Bajirao Mastani"
        },
        {
            id: 3,
            filmName: "Tanhaji"
        },
        {
            id: 4,
            filmName: "Pushpa"
        }
    ]
    let index = req.params
    if (index.filmId <= films.length) {
        res.send(films[(index.filmId - 1)])
    } else {
        res.send("id number must be between 1 to " + (films.length))
    }

})


module.exports = router;