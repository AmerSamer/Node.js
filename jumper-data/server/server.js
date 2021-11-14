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
        // return res.status(200).send( data+ ' AVG: ' +x(data))
        return res.status(200).send(data)
    })
})
// const x = (data)=>{
//     let avg = (data[0].jump1 + data[0].jump2 + data[0].jump3) / 3
//     return avg
// }
app.delete('/:jumperId', (req, res) => {
    const {jumperId} = req.params
    itemsModel.findByIdAndDelete(jumperId, (err, data) => {
        if (err) throw err;
        if (data) {
            return res.status(200).json({success: data})
        }
        return res.status(400).json({itemNotFound: 'Item not found'})
    })
})
app.post('/', (req, res) => {
    const {name, age, country , jump1 , jump2 , jump3 } = req.body
    const newItem = new itemsModel({
        name: name,
        age: age,
        country: country,
        jump1: jump1,
        jump2: jump2,
        jump3: jump3,
    });
    newItem.save()
    return res.status(200).json({success: newItem})
})
app.put('/:jumperId', (req, res) => {
    const {jumperId} = req.params
    const {jump1 , jump2 , jump3} = req.body;
    itemsModel.findByIdAndUpdate(jumperId,{ jump1: jump1 , jump2: jump2 , jump3: jump3}, (err, data) => {
        if (err) throw err;
        if (data) {
            return res.status(200).json({success: 'Updated Successfully'})
        }
        return res.status(400).json({itemNotFound: 'Item not found'})
    })
})
mongoose.connect('mongodb://localhost/dbJumpers', {useNewUrlParser: true, useUnifiedTopology: true}, () => {
    console.log('Connected to DB');
});
app.listen(process.env.PORT, () => console.log(`Listening on port ${process.env.PORT}`));