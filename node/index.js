// const http = require("http");

// const server = http.createServer((req, res) => {
//   if (req.url === "/" && req.method === "GET") {
//     res.end("HELLO WORLD FROM BACKEND");
//   }
//   if(req.url === "/about" && req.method === "GET"){
//     res.end("THIS IS ABOUT URL");
//   }
// });

// server.listen(4000, () => {
//   console.log("Server listening on port 4000");
// });

// Async Await
// Callbacks

const fs = require("fs");

// WRITE FILE METHOD

// // console.log("Before Async File Creation")
// fs.writeFile("./data.txt", "HELLO WORLD", "utf-8", ()=>{
//     console.log("File is created")
// })
// console.log("After Async File Creation")

// console.log("Before Sync File Creation")
// fs.writeFileSync("./dataSync.txt", "Synchronous File Data", "utf-8")
// console.log("After Sync File Creation")

//APPEND FILE METHOD

// fs.appendFile("./data.txt", " NEW DATA", "utf-8", ()=>{
//     console.log("New data appended")
// })


//RENAME FILE METHOD
// fs.rename("./data.txt", "./raname.txt", ()=>{
//     console.log("file has been renamed")
// })

// const data = fs.readFileSync("./dataSync.txt", "utf-8")

// console.log(data)