let fs = require("fs");
let express= require("express");
let app= express();
require('dotenv').config()

app.get("/demodata",(req,res)=>{
    let data= JSON.parse(fs.readFileSync("./data.json","utf-8"));
    res.json(data);
})

app.get("/",(req,res)=>{
    res.send("hello");
})

let port = process.env.PORT;
app.listen(port || 5000,()=> console.log("I am listeing on "+ (port||"5000")));