const EventEmitter = require("events");

class myEvent extends EventEmitter {
  constructor() {
    super();
  }
  onPrint() {
    this.on("printNow", (info) => {
      console.log("bax", info);
    });
  }
  onDoNow() {
    this.on("doNow", (info) => {
      console.log(info);
    });
  }
  onPrintNames(){
      this.on('printNames',(data)=>{
          console.log(data);
      })
  }
  emitPrint(info) {
    this.emit("printNow", info);
  }
  emitDoNow(info) {
    this.emit("doNow", info);
  }
  emitPrintNames(info){
    this.emit("printNames",info)
  }
}

// const theEvent = new myEvent();

module.exports = new myEvent();
