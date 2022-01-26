//function define global scope
// var sayHello = function(){

// }

// window.sayHello();


//problem of global scope
//if samename function in other file, it is overrided
//be careful to define function in global scope

//solution : modulaliry (encapsulated insode of module)
//everyfile in node apllication is considered ad module == scope : in that file (private)
//outside of module: need to export and import 

//every node application have main module 
//every file in node is module
//defined variable and function in module is private (scope is in that file)

console.log(module) 
//ir return attribute of module: id, filename, path, children ...

//module can be reuse in other part of application and even in other application 


//load module: require (return object )
// ./ current folder  .. parent folder
// require('./logger.js')
// require('./logger')
// require('../logger')

var logger = require('./logger');
console.log(logger);

logger.log("message");

//const is better since we don't need to overried later 
const logger = require('./logger');

// logger = 1; //override which is error 

//show error of jscode on terminal: $jshint [filename] 