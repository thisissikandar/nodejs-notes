const fs = require("fs");

// To create a New file With Data Inside 
// 1. this Works in Synchronously
// Its take two Parameter one is path second is Data Which Pass
// fs.writeFileSync("./file1.txt", " Hello World iii");

//2. This Works Asynchronously
//  It takes Three Parameter third one is a CallBack in err
fs.writeFile("./file2.txt", " Hello World", (err) => {});

// read Files 
// 1. this One is Work Synchronously and it takes Two arguments
// first one is Path Second Is code of file
// its return value
const result =fs.readFileSync("./contacts.txt","utf-8")
console.log(result);

// 2. its Work Asynchronously
// Its Takes three Parameter third one is Callback
// In Third having two parameter one is errr, second is result
// and its not returning any value
fs.readFile("./file2.txt", "utf-8", (err, result)=>{
    if (err) {
        console.log("Error ::",err);
    }else{
        console.log(result);
    }
})

// Append Files
fs.appendFileSync("./file1.txt",` ${Date.now().toString()} Say My name \n`)

// copy files
// fs.copyFileSync("./file1.txt", "./sss.txt")
// fs.cpSync("./file1.txt", "./ssx.txt")

// Delete Files [Unlink]

// fs.unlinkSync("./ssx.txt")

console.log(fs.statSync("./file1.txt"));
fs.mkdirSync("hello files")