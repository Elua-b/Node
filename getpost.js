
const express=require('express');
const app=express();
const bodyparser=require('body-parser');
app.use(bodyparser.json());
const port=2000;

app.get("/",(req,res)=>{
    res.send("hello world");
})
app.post("/",(req,res)=>{
    res.send(req.body)
})
app.listen((port),()=>{
console.log(`the port is on ${port}`);
})

