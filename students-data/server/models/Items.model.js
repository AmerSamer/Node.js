const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ItemSchema = new Schema({
    name: String,
    age: Number,
    email: String,
});


const itemsModel = mongoose.model('students', ItemSchema);


module.exports = {
    itemsModel
}

