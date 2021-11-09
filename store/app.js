const express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors')
const products = [
    { name: 'bamba', price: '2', id: 0 },
    { name: 'bisle', price: '3', id: 1 },
    { name: 'tilon', price: '11', id: 2 },
];
const app = express();

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.status(200).json({ "products": products })
});
app.post('/', (req, res) => {
    if (products.find((prd) => { return req.body.name === prd.name })) {
        return res.status(404).send('user exist')
    }
    const product = {
        name: req.body.name,
        price: req.body.price,
        id: ((products.length != 0) ? products[products.length - 1].id + 1 : 0)
    }
    products.push(product)
    return res.status(209).json({ product: product })
})
app.delete('/:productId', (req, res) => {
    const { productId } = req.params;
    const productExist = products.find((prd) => productId == prd.id);
    const projectIndex = products.findIndex((prd) => productId == prd.id);
    if (!productExist) {
        return res.status(404).json('prod not found')
    }
    products.splice(projectIndex, 1);
    return res.json(' removed succssesfuly');
})
app.listen(4001, () =>
    console.log(`listening on port 4001!`),
);
