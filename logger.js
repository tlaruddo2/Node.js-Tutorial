(funtion (exports, require, module, __filename, __dirname){
    
    var url = 'httpL//mylogger.io/log';

    function log(message){
        //assume send an HTTP request
        console.log(message);
    }

    module.exports = log;

    // module.exports.log = log; possible
    // exports.log = log;possible

    // exports = log; // not able 
    // since it is reference of exprots module (module.exprots)


})

//how module work: Module Wrapper function 

//node does not excute this code directly
//wrap inside of a fuction 
// (funtion (exports, require, module, __filename, __dirname){

//require not globall

//__dirname:path of directory
