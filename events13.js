const EventEmitter = require("events");
const fs = require("fs");

class event13 extends EventEmitter {
  constructor() {
    super();
    this.onNamesArray();
  }
  onNamesArray() {
    this.on("arrayOfNames", (...arr) => {
      fs.writeFile('./myNames.txt',`${arr}`,()=>{});
    });
  }
  emitNamesArray(...arr){
      this.emit('arrayOfNames',arr)
  }
}

module.exports = new event13();
