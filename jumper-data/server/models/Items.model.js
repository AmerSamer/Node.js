const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ItemSchema = new Schema({
    name: String,
    age: Number,
    country: String,
    jump1: Number,
    jump2: Number,
    jump3: Number,
});

const itemsModel = mongoose.model('jumpers', ItemSchema);

module.exports = {
    itemsModel
}

