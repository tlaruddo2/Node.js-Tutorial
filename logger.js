
// assume log service url 
var url = 'httpL//mylogger.io/log';

function log(message){
    //assume send an HTTP request == implementation detailed 
    console.log(message);
}

//both variable and function are private 


//export 
module.exports.log = log;
module.exports.url = url;

//change name when it is exported 
// module.exports.endPoint = url; 
// we don't need to export url which is implementation detailed 
// no need to be public 

//implementation defailed <=> public interface 
//public interace here == log function



//if want just export single function or obejct
module.exports = log;

//in app.js 
// const logger = require('./logger');
//logger is function not module obejct
// log("message");  no need to module name 