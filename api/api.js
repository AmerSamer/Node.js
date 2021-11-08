const { default: axios } = require('axios');
const express = require('express');
const app = express();

const getJokesExpress = async () => {
    const response = await axios.get('https://api.chucknorris.io/jokes/random')
    app.get('/', (req, res) => {
        return res.json(response.data.value);
    });
    app.listen(4000, () =>
        console.log(`listening on port 4000!`),
    );
}

module.exports = {
    getJokesExpress
};


