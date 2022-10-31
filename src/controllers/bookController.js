// const { findById } = require("../models/authorModel")
const authorModel = require("../models/authorModel")
const bookModel = require("../models/bookModel")
const publisherModel = require("../models/publisherModel")

const { isValidObjectId } = require('mongoose')

const createBook = async function (req, res) {
    let book = req.body
    if (!book.author) {
        return res.send({ massage: "Auther ID required" })
    }
    if (!book.publisher) {
        return res.send({ massage: "publisher ID required" })
    }

    if (!isValidObjectId(book.author)) {
        return res.send("Plese Enter valid author ID")
    }
    if (!isValidObjectId(book.publisher)) {
        return res.send("Plese Enter valid publisher ID")
    }

    let bookCreated = await bookModel.create(book)
    res.send({ data: bookCreated })
}



const getBooksWithAuthorDetails = async function (req, res) {
    let specificBook = await bookModel.find().populate('author').populate('publisher')
    res.send({ data: specificBook })

}
const coverUpdate = async function (req, res) {
    const pbId = await publisherModel.find({ name: ["Penguin", "HarperCollins"] }).select({ _id: 1 });
    const arrPubID = pbId.map(a => a._id)
    let cover1 = await bookModel.updateMany({ publisher: { $in: arrPubID } }, { $set: { isHardCover: true } }, { new: true })
    return res.send({ data: cover1 })


    // let bkId = await bookModel.find({ publisher: pbId }).select({ _id: 1 });
    // for (let i = 0; i < bkId.length; i++) {
    //     const itom = bkId[i];
    //     let cover = await bookModel.findByIdAndUpdate(itom, { $set: { isHardCover: true } })

    //     res.send({ data: cover })
    // }
}
const priseUpdate = async function (req, res) {

    const pbId = await authorModel.find({ rating: { $gte: 3.5 } }).select({ _id: 1 });
    const arrbkId = pbId.map(a => a._id)
    let update = await bookModel.updateMany({ rating: { $in: arrbkId } }, { $inc: { price: 10 } }, { new: true })
    res.send({ data: update })

    // for (let i = 0; i < bkId.length; i++) {
    //     const itom = bkId[i];
    //     let update = await bookModel.findByIdAndUpdate(itom, { $inc: { price: 10 } })
    //     res.send({ data: update })

    // }

}

const getBooksData = async function (req, res) {
    let books = await bookModel.find()
    res.send({ data: books })


}


module.exports.createBook = createBook
module.exports.getBooksData = getBooksData
module.exports.getBooksWithAuthorDetails = getBooksWithAuthorDetails
module.exports.coverUpdate = coverUpdate
module.exports.priseUpdate = priseUpdate
