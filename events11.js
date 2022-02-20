const EventEmitter = require("events");
const fs=require('fs');

class Event11 extends EventEmitter{
    constructor(){
        super();
        this.onFilePrint();
    }
    onFilePrint(){
        this.on('filePrint',(file)=>{
            fs.writeFile(`./${file}.txt`,"im listening",()=>{})
        })
    }
    emitFilePrint(file){
        this.emit('filePrint',file)
    }
}

module.exports = new Event11();