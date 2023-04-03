const fs = require('fs');
const os = require('os');
const sentence = require('./practice2');

fs.writeFile('./content/practice.txt', `${sentence.sentence1} ${os.userInfo().username}`, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('File written successfully!');
    }
});