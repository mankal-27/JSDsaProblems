const EventEmitter = require('node:events');
class MyEmitter extends EventEmitter {}
const myEmitter = new MyEmitter();

myEmitter.on('event', function(a,b) {
    console.log(a,b,this,this == myEmitter);
    
})

myEmitter.emit('event', 'a', 'b');