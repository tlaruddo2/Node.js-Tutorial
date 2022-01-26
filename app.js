//built in module in core of Node (check in website)

//not built in need to path  ('./moduleName')
//built int module  ('modulename')



//path module
const path = require('path')

//parse method: give us infor about module
var pathObj = path.parse(__filename);
console.log(pathObj);


//OS module 
//how to get info about current OS 
const os = require('os'); 
var totalMemory = os.totalmem()
var freeMemory = os.freemem();

console.log ('Ootal memory: ' + totalMemory);

//Template String (in ES6 or ES2015 : ECMASCript 6)
//no need concat
console.log(`Total Memory: ${totalMemory}`);
console.log(`Total Memory: ${freeMemory}`);

//if JS working on browser, we could not get this info 
//These info is avaliable on OS and server


//File system Module 
//Working file and directory
//this have syncronized and asysncronize method
// use asysncronize moethod (non-blocking)
const fs = require('fs');

//return all file and folder in current folder 
const files = fs.readdirSync('./'); // current folder 
console.log(files);

//all asuncronized function 
//last argument is call back function 
//files == string array
fs.readdir('./', function(err, files){
    if (err) console.log("error", err);
    else console.log('result',files);
});