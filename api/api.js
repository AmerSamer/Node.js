const axios = require('axios');
const request = require('request');

async function getJokes() {
    // try {
    //     const response = await axios.get('https://api.chucknorris.io/jokes/random');
    //     console.log(response.data.value);
    // } catch (error) {
    //     console.error(error);
    // }
}
const getJokesReq = () => {
    // const res = request('https://api.chucknorris.io/jokes/random', function (error, response, body) {
    //      console.error('error:', error); // Print the error if one occurred
    //      console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    //      console.log('body:', body); // Print the HTML for the Google homepage.
    // });
}
const getJokes3Party = async () => {
    var options = {
        'method': 'GET',
        'url': 'https://api.chucknorris.io/jokes/random',
        'headers': {
          'X-API-KEY': 'E6xwOg2BY4RbmiJogfyegrt746r7te',
          'Content-Type': 'application/json'
        }
      };
      const result = await axios(options);
      console.log(result.data.value);
}

module.exports = {
    getJokes,
    getJokesReq,
    getJokes3Party
};