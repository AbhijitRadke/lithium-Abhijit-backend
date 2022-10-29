const PublisherModel = require("../models/publisherModel")

const createPublisher = async function (req, res) {
    let publ = req.body
    let authorCreated = await PublisherModel.create(publ)
    res.send({ data: authorCreated })
}

const getPublishersData = async function (req, res) {
    let pbl = await PublisherModel.find()
    res.send({ data: pbl })
}

module.exports.createPublisher = createPublisher
module.exports.getPublishersData = getPublishersData