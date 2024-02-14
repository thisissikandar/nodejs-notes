const http= require("http")
const fs= require("fs")

const myServer = http.createServer((req, res)=>{
    const log = new Date().toLocaleString() + req.url +`:: New request Logged\n`
    fs.appendFile("./log.txt", log, (err, data)=>{
        res.end("Hello From Server Again 👌👌👌")
    })
    console.log("New Request From User",);
})

myServer.listen(process.env.PORT || 8000, ()=>{

    console.log(`Server Start On Port 8000 !! 👌👌`);
})