const express = require("express");
const PORT = 3000;
const path = require('path');

const app = express();

let table = ["Mikes table"]

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(express.static("public"));

app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname, "index.html"))
})

app.get("/api/table",(req,res)=>{
    res.json(table)
})

app.post("/api/table",(req,res)=>{
    console.log(req.body.item);
    table.push(req.body.item);
    res.send(req.body.item)
})

app.delete("/api/table",(req,res)=>{
    table = [];
    res.send("cleared list!!")
})

app.listen(PORT,()=>{
    console.log("listening on port: " + PORT)
})