const express=require('express');
const path=require('path');
const app=express();
const port=8080;

app.use(express.static("dist"));

app.get("/",(_req, res)=>{
    res.sendFile(path.join(path.resolve("dist"),"index.html"));
});

app.listen(port,()=>console.log('running on server 8080'));