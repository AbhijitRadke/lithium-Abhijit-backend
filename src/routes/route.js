const express = require('express');
const { route } = require('express/lib/application');
const { append } = require('express/lib/response');
const router = express.Router();

let players =
    [
        {
            "name": "manish",
            "dob": "1/1/1995",
            "gender": "male",
            "city": "jalandhar",
            "sports": [
                "swimming"
            ]
        },
        {
            "name": "gopal",
            "dob": "1/09/1995",
            "gender": "male",
            "city": "delhi",
            "sports": [
                "soccer"
            ],
        },
        {
            "name": "lokesh",
            "dob": "1/1/1990",
            "gender": "male",
            "city": "mumbai",
            "sports": [
                "soccer"
            ],
        }
    ]

router.post('/players', function (req, res) {
    let newPlayer = req.body
    for (let i = 0; i < players.length; i++) {
        let plear = players[i]
        if (plear.name == newPlayer.name) {
            res.send("player is allredy exist")
        } else {

            players.push(newPlayer)
            res.send({ data: players, status: true })
        }

    }

})

const arr = [1, 2, 3, 4, 5, 7]
router.get('/missingNO1', function (req, res) {
    let n = arr[(arr.length - 1)]
    let sum = (n * (n + 1)) / 2
    let arrSum = arr.reduce((x, total) => total += x)
    let miss = sum - arrSum
    res.send({ Data: miss })
})


const arr2 = [33, 34, 35, 37, 38]
router.get('/missingNO2', function (req, res) {
    let arr1st = arr2[0]
    let p = arr2.length
    let n = arr2[(p - 1)]
    let sum = ((p + 1) * (n + arr1st)) / 2
    let arrSum = arr2.reduce((x, total) => total += x)
    let miss = sum - arrSum
    res.send({ Data: miss })
})


let persons = [
    {
        name: "PK",
        age: 10,
        votingStatus: false
    },
    {
        name: "SK",
        age: 20,
        votingStatus: false
    },
    {
        name: "AA",
        age: 70,
        votingStatus: false
    },
    {
        name: "SC",
        age: 5,
        votingStatus: false
    },
    {
        name: "HO",
        age: 40,
        votingStatus: false
    }
]
let arrOfVoters = []
router.post('/votAge', function (req, res) {
    let vot = req.query.age
    for (let i = 0; i < persons.length; i++) {
        let per = persons[i]
        if (per.age >= vot) {
            persons[i].votingStatus = true
            arrOfVoters.push(per.name)
        }
    }
    // console.log(persons)
    res.send({ result: arrOfVoters, arr: persons })

})




// router.post("/test-post-3", function(req, res) {
//     // let id = req.body.user
//     // let pwd= req.body.password

//     // console.log( id , pwd)

//     console.log( req.body )

//     res.send(  { msg: "hi" , status: true }  )
// })



// router.post("/test-post-4", function(req, res) {
//     let arr= [ 12, "functionup"]
//     let ele= req.body.element
//     arr.push(ele)
//     res.send(  { msg: arr , status: true }  )
// })

module.exports = router;