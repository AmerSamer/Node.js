const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ItemSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    jump1: Number,
    jump2: Number,
    jump3: Number,
});

const itemsModel = mongoose.model('jumpers', ItemSchema);

module.exports = {
    itemsModel
}

