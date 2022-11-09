const UserModel = require("../models/userModel")







const createUser = async function (req, res) {
    try {
        let data = req.body
        if (Object.keys(data).length != 0) {
            let savedData = await UserModel.create(data)
            res.status(201).send({ msg: savedData })
        }
        else res.status(400).send({ msg: "BAD REQUEST" })

    }
    catch (err) {
        console.log("This is the error :", err.message)
        res.status(500).send({ msg: "Error", error: err.message })
    }
}

const getUsersData = async function (req, res) {
    try {
        let allUsers = await UserModel.find()
        res.status(200).send({ msg: allUsers })
    }

    catch (err) {
        console.log("This is the error :", err.message)
        res.status(500).send({ msg: "Error", error: err.message })
    }
}

module.exports.createUser = createUser
module.exports.getUsersData = getUsersData
