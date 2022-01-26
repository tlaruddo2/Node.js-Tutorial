//global object in JS
console.log();; 

setTimeout();
clearTimeout();

setInterval();
clearInterval();

//in browser
//all variable function defined globally accessed via window obeject
window.console.log();
var message = '';
window.message;

//in node , no window object
//instead global object (access function but not variable)
global.console.log();
var message2 = '';
console.log(global.message2); // undefined.

