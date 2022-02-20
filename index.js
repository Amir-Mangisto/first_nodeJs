const fs = require("fs");
// fs.writeFile('./files.txt',"this is write file",()=>{})

// fs.readFile('./files.txt',(err,result)=>{console.log(result.toString());})
for (let i = 1; i < 15; i++) {
  // fs.writeFile('./files.txt',i.toString(),()=>{})
}
fs.readFile("./files.txt", (err, result) => {
  if (err) throw err;
  // console.log(result.toString());
});

// let names = ["amir", "dan", "ben", "tal"];
// console.log(names);

// let myNum = [
//   Math.floor(Math.random() * 10),
//   Math.floor(Math.random() * 10),
//   Math.floor(Math.random() * 10),
//   Math.floor(Math.random() * 10),
//   Math.floor(Math.random() * 10),
//   Math.floor(Math.random() * 10),
//   Math.floor(Math.random() * 10),
//   Math.floor(Math.random() * 10),
//   Math.floor(Math.random() * 10),
//   Math.floor(Math.random() * 10),
// ];

// for (let iterator of myNum) {
//     if (iterator % 2 == 0) {
//     console.log(myNum);

//     }
// }

let randomNames = ["amir", "dan", "ben", "tal", "yakov"];

// fs.writeFile('./files.txt',randomNames.toString(),()=>{});

// fs.readFile("./files.txt", (err, result) => {
//   if (err) throw err;
//     let arr = result.toString().split(',');
//     arr.forEach(item => {
//         if(item[0].toLocaleLowerCase() == 'a') console.log(item);
//     })
// })



// let numbers = [
//   Math.floor(Math.random() * 100),
//   Math.floor(Math.random() * 100),
//   Math.floor(Math.random() * 100),
//   Math.floor(Math.random() * 100),
//   Math.floor(Math.random() * 100),
// ];

// fs.writeFile("./files.txt", numbers.toString(), () => {
//   for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] % 3 == 0) {
//         console.log(i);
//     }
//   }
// });

// fs.readFile('./files.txt',(err,result)=>{
//     if(err) throw err;
//     let arr = result.toString().split(',');
//     arr.forEach(element => {
//         if(parseInt(element) > 50) console.log(element);
//     });
// })

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// const myEvent = require('./myEvent.js')
// myEvent.onPrint();
// myEvent.emitPrint("shalom")

// myEvent.onDoNow();
// myEvent.emitDoNow("amir")

// myEvent.onPrintNames();
// myEvent.emitPrintNames('hello there' )

/////////////////////////////////////////
//10

// const event10 = require('./events10.js');

// event10.emitPrintListen('printListen');

//11
// const event11 = require('./events11.js');

// event11.emitFilePrint('filePrint',"ex11file")

// //12
// const event12 = require('./events12.js')

// event12.emitListenFile("event12","Oshri is my friend")

//13
