const fs = require('fs');
const uniqid = require('uniqid');
const chalk = require('chalk');

///////////////////// START Add User ///////////////////////////
const addUser = function () {
    const usersLoaded = loadUser()
    usersLoaded.push({
        "id": uniqid(),
        "name": 'Mon',
        "email": 'm@m.com'
    })
    console.log(chalk.green.inverse('New User Added!'));
    saveUser(usersLoaded)
}
///////////////////// END of Add User ///////////////////////////
/////////// Load file
const loadUser = function () {
    try {
        const data = fs.readFileSync('users/users.json')
        const dataJson = data.toString()
        return JSON.parse(dataJson)
    } catch (err) {
        return []
    }
}
/////////// Write File 
const saveUser = function (usersLoaded) {
    const userJson = JSON.stringify(usersLoaded)
    fs.writeFileSync('users/users.json', userJson)
}
///////////////////// START Remove User ///////////////////////////
const removeUser = function (id) {
    const usersLoaded = loadUser()
    const usersToKeep = usersLoaded.filter(function (usr) {
        return usr.id !== id
    })
    if (usersLoaded.length > usersToKeep.length) {
        console.log(chalk.green.inverse('User Removed!'));
        saveUser(usersToKeep)
    } else {
        console.log(chalk.red.inverse('No User Found :('));
    }
}
///////////////////// END of Remove User ///////////////////////////
///////////////////// START Udpate User ///////////////////////////
const updateUser = function (id) {
    const usersLoaded = loadUser()
    const usersToUpdate = usersLoaded.find((usr) => usr.id === id)

    if (usersToUpdate) {
        for (let i = 0; i < usersLoaded.length; i++) {
            if (usersLoaded[i].id === id) {
                usersLoaded[i].name = 'joe'
            }
        }
        saveUser(usersLoaded)
    } else {
        console.log(chalk.red.inverse('No User Found to Update :('));
    }
}
///////////////////// END of Udpate User ///////////////////////////
///////////////////// START Read User ///////////////////////////
const readUser = function () {
    const usersLoaded = loadUser()
    console.log(usersLoaded);
}
///////////////////// END of Read User ///////////////////////////
module.exports = {
    addUser: addUser,
    removeUser: removeUser,
    updateUser: updateUser,
    readUser: readUser
};
