const express=require("express");

const app=express();

app.use("/",(err,req,res,next)=>{
       if(err){
              res.status(500).send("error happened");
       }
      
});

app.get("/admin",(req,res)=>{
      
       throw new Error("jwenwio");
       res.send("hi");
       
});

app.use("/",(err,req,res,next)=>{
       if(err){
              res.status(500).send("error happened");
       }
});



app.listen(7777);
