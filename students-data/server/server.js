const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
require('dotenv').config()
const mongoose = require('mongoose');
const itemsModel = require('./models/Items.model').itemsModel;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());

app.get('/', (req, res) => {
    itemsModel.find({}, (err, data) => {
        if (err) throw err;
        res.send(data);
    })
})
app.delete('/delete/:studentId', (req, res) => {
    const {studentId} = req.params
    itemsModel.findByIdAndDelete(studentId, (err, data) => {
        if (err) throw err;
        if (data) {
            return res.status(200).json({success: data})
        }
        return res.status(400).json({itemNotFound: 'Item not found'})
    })
})
app.post('/', (req, res) => {
    const {name, age, email} = req.body
    const newItem = new itemsModel({
        name: name,
        age: age,
        email: email,
    });
    newItem.save()
    return res.status(200).json({success: newItem})
})
mongoose.connect('mongodb://localhost/dbStudents', {useNewUrlParser: true, useUnifiedTopology: true}, () => {
    console.log('Connected to DB');
});
app.listen(process.env.PORT, () => console.log(`Listening on port ${process.env.PORT}`));