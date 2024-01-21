const fs = require("fs")
// Blocking Operation.... Also Called As synchronous Code
// console.log("1");
// const result = fs.readFileSync("./test.txt","utf-8")
// console.log(result);
// console.log("2");


// Non-Blocling Operation.... Also Called As Asunchronous 
// console.log("1");
// fs.readFile("./test.txt", "utf-8",(err, result)=>{
//     console.log(result);
// })
// console.log("2");



// Ckecking Operating System from Node js 
// it Have 8 threads in my PC
const os = require("os")
console.log(os.cpus().length);