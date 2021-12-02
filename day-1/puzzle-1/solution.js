const fs = require('fs');
const path = __dirname;
const contents = fs.readFileSync(`${path}/input.txt`).toString();
const distances = contents.split('\n');

let changes = 0;
distances.reduce((previous, current) => {
    if (Number(current) > Number(previous)){
        changes++;
    }
    return current;
}, Infinity);

console.log(changes);