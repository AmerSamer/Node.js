const fs = require('fs');
const users = require('./user.js');

const addUsr = users.addUser()
const removeUsr = users.removeUser("bxmeady4kvqkonbt")

// const userJson = JSON.stringify(addUsr)
// fs.writeFileSync('users/users.json', userJson)