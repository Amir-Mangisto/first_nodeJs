const EventEmitter = require("events");

class Events extends EventEmitter {
    constructor(){
        super();
        this.onPrintListen();
    }
    onPrintListen(){
        this.on('printListen',()=>{
            console.log("im listening");
        })
    }
    emitPrintListen(){
        this.emit('printListen')
    }
}

module.exports = new Events();