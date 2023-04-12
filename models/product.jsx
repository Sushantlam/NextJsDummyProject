const mongoose = require('mongoose');

const productSchema= new mongoose.Schema({
    title: {type: String, required: true},
    slug: {type: String, required: true},
    desc: {type: String, required: true},
    availableQty: {type: Number, required: true},
     img: {type: String, required: true},
    size: {type: String},
    color: {type: String}},  {timestamps: true})

    mongoose.models={}

export default mongoose.model("Product", productSchema)