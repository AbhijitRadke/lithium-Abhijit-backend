const express = require('express');
const underscore = require('underscore')
const lodash = require('lodash')

const router = express.Router();                               ///test-you   //importing a custom module
const xyz = require('../logger/logger')                         //importing external package
const x2 = require('../util/helper')
const x3 = require('../validator/formatter')

router.get('/test-me', function (req, res) {                     //Calling the components of a different custom module
    console.log("Calling my function ", xyz.myFunction())
    console.log("The value of the constant is ", xyz.myUrl)        //Trying to use an external package called underscore
    let myArray = ['Akash', 'Pritesh', 'Sabiha']
    let result = underscore.first(myArray)
    console.log("The result of underscores examples api is : ", result)

    console.log("print result module 1", xyz.welcome1())

    console.log("Date :", x2.printDate())
    console.log("Month:", x2.printMonth())
    console.log("info:", x2.getBatchInfo())

    console.log(x3.tr());
    console.log(x3.upr());
    console.log(x3.lowr());

    const months = ["Jan","Feb","Mar","April","May","June","jul","Aug","Sept","Oct","Nov","Dec"];
    console.log(lodash.chunk(months,4))
    const oddNum=[1,3,5,7,9,11,13,15,17,19];
    console.log(lodash.tail(oddNum,9));

    const numArr=[2,5,4,2,7, 25,98,56,42,2,5,4,2,7]
    console.log(lodash.union(numArr));
    const keyValue=[['horror','The Shining'],['drama','Titanic'],['thriller','Shutter Island'],['fantasy','Pans Labyrinth']]
    console.log(lodash.fromPairs(keyValue))

    res.send('My first ever api!')

});

module.exports = router;

