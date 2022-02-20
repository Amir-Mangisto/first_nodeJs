const EventEmitter = require("events");
const fs=require('fs');

class event12 extends EventEmitter{
    constructor(){
        super();
        this.onListenFile()
    }
    onListenFile(){
        this.on('myFile',(file,data)=>{
            fs.writeFile( `./${file}.txt`,`${data}`,()=>{})
        })
    }
    emitListenFile(file,data){
        this.emit("myFile",file,data)
    }
}

module.exports = new event12();