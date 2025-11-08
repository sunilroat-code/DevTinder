const express=require("express");

const app=express();
  

app.use("/op",(req,res)=>{
       res.send("your op route ");
});


app.use("/feed/2",(req,res)=>{
       res.send("your feed 2.0");
});



app.use("/feed",(req,res)=>{
     res.send("your feed ");
});


app.use("/",(req,res)=>{
       res.send("your / route iss here ");
});


app.use((req,res)=>{
res.send("hay this your server how are you");
});


app.listen(7777);
