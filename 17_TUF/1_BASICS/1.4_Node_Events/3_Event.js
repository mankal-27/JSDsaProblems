const EventEmitter = require("node:events");
class MyEmitter extends EventEmitter {}
const myEmitter = new MyEmitter();

myEmitter.on('event', (a,b) => {
    setImmediate(() => {
        console.log('This happens asynchrsly');
    });
});

myEmitter.emit('event', 'a', 'b');