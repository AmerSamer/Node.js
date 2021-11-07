const path = require('path');
const fs = require('fs');

// const fs = require('fs');


// fs.writeFileSync('file_system/notes.txt', 'Hello')
////////////////////////////////// File destination.txt will be created or overwritten by default.
// fs.copyFile('file_system/notes.txt', 'file_system/newNotes.txt', (err) => {
//     if (err) throw err;
//     console.log('notes.txt was copied to newNotes.txt');
// });

// fs.rename('file_system/newNotes.txt', 'file_system/notesNew.txt', function(err) {
//     if ( err ) console.log('ERROR: ' + err);
// });


//joining path of directory 
// const directoryPath = path.join(__dirname);
// passsing directoryPath and callback function
// fs.readdir(directoryPath, function (err, files) {
//     //handling error
//     if (err) {
//         return console.log('Unable to scan directory: ' + err);
//     } 
//     //listing all files using forEach
//     files.forEach(function (file) {
//         // Do whatever you want to do with the file
//         console.log(file); 
//     });
// });

fs.appendFileSync('file_system/notes.txt', ' from the other side')
