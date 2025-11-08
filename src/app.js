const express=require("express");

const app=express();


app.use("/feed",(req,res)=>{
res.send("your feed ");
});

app.use((req,res)=>{
res.send("hay this your server how are you");
});


app.listen(7777);
