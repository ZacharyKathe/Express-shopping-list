const express = require("express");
const PORT = 3000;
const path = require('path');

const app = express();

const tables = [{
    name: "bobby",
    phone: 345-886-990,
    email: "boby@gmail",
    id: "1"
    
}]
const waitlist = [{
    name: "bobby",
    phone: 345-886-990,
    email: "boby@gmail",
    id: "1"
    
}]

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(express.static("public"));

app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname, "index.html"))
})

app.get("/api/tables",(req,res)=>{
    res.json(tables)
})

app.get("/api/waitlist",(req,res)=>{
    res.json(waitlist)
})

app.get("/allTables", (req,res)=> res.sendFile(path.join(__dirname, "allTables.html")));

app.get('/makeReservation', (req,res)=> res.sendFile(path.join(__dirname, "makeReservation.html")));

app.post("/api/reserve",(req,res)=>{
    let hasTable = false;
    if(tables.length<5){
        tables.push(req.body)
        hasTable=true;
    }else{
        waitlist.push(req.body)
    }
    
    res.json({
        reservationData:req.body,
        hasTable:hasTable
    })
})

app.delete("/api/table",(req,res)=>{
    table = [];
    res.send("cleared list!!")
})

app.listen(PORT,()=>{
    console.log("listening on port: " + PORT)
})