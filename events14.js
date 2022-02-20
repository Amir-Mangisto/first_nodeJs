const EventEmitter = require("events");
const fs = require("fs");

class events14 extends EventEmitter{
    constructor(){
        super();
        this.onNumberArray();
    }
    onNumberArray(){
        this.on("myNumbers",(arr)=>{

            // let array = [];
            // Nums.forEach(numItem => {
            //     if(numItem > 18){array.push(numItem)}
            // });
            // console.log(array);
            fs.writeFile('./theNumbers.txt',`${arr.filter(item=>item>18)}`,()=>{
                
            })
        })
    }
    emitNumbersArray(arr){
        this.emit("myNumbers",arr)
    }
}
module.exports = new events14();