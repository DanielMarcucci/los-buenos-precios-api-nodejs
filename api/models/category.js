const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Category = mongoose.model('Category', new Schema({
    //category_id: { type: Schema.Types.ObjectId },
    name: String,
    icon: String
}))

module.exports = Category