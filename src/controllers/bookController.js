const { findById } = require("../models/authorModel")



const authorModel = require("../models/authorModel")
const bookModel = require("../models/bookModel")
const publisherModel = require("../models/publisherModel")

const createBook = async function (req, res) {
    let book = req.body
    if (!book.author) {
        res.send({ massage: "Auther ID required" })
    }
    if (!book.publisher) {
        res.send({ massage: "publisher ID required" })
    }
    let au = await authorModel.findById(book.author)
    if (!au) {
        res.send("Plese Enter valid author ID")
    }
    let pb = await publisherModel.findById(book.publisher)
    if (!pb) {
        res.send("Plese Enter valid publisher ID")
    }

    let bookCreated = await bookModel.create(book)
    res.send({ data: bookCreated })
}



const getBooksWithAuthorDetails = async function (req, res) {
    let specificBook = await bookModel.find().populate('author').populate('publisher')
    res.send({ data: specificBook })
    
}
const coverUpdate = async function (req, res) {
    let pbId = await publisherModel.find({ name: ["Penguin", "HarperCollins"] }).select({ _id: 1 });
    let bkId = await bookModel.find({ publisher: pbId }).select({ _id: 1 });
    for (let i = 0; i < bkId.length; i++) {
        const itom = bkId[i];
        let cover = await bookModel.findByIdAndUpdate(itom, { $set: { isHardCover: true } })
        
        res.send({ data: cover })
    }
}
const priseUpdate = async function (req, res) {
    
    let pbId = await authorModel.find({ rating: { $gte: 3.5 } }).select({ _id: 1 });
    let bkId = await bookModel.find({ author: pbId }).select({ _id: 1 })
    for (let i = 0; i < bkId.length; i++) {
        const itom = bkId[i];
        let update = await bookModel.findByIdAndUpdate(itom, { $inc: { price: 10 } })
        res.send({ data: update })
        
    }
    
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
