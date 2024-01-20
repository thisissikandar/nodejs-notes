console.log("hello World")
// It Can Be Imported 
// const math = require("./math.js")
// It Can Be Destructuring Like Objects
const {add, sub} = require("./math.js")

// If Are YOu importing Without ./ It Will Search in node Modules Globally 
// and also in node build in modules Like
const http = require("http")
const http = require("fs")
const http = require("buffer")
const http = require("crypto")


// console.log(math.add(5));
console.log(add(6));
console.log(sub(6));