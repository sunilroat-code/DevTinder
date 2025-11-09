const express=require("express");


const app=express();

// const {auth}=require("./middleware/auth.js");

function auth(req,res,next){
    console.log("admin auth is getting checked");
    const token="abc";
    const check=token==="abc";
    if(!check){
        res.status(401).send("unauthorized access");
    }else{
        next();
    }
}
  



app.get("/admin/allprofile",auth,(req,res)=>{

       res.send("your op route ");
});


app.get("/admin/alldata",auth,(req,res)=>{
       res.send("your op route ");
});


app.get("/admin/check",auth,(req,res)=>{
       res.send("your op route ");
});

app.get("/user",(req,res)=>{
       res.send("your op route ");
});


app.use("/feed/2",(req,res)=>{
       res.send("your feed 2.0");
});



app.get("/feed",(req,res)=>{
     res.send("your feed ");
});


app.use("/c",(req,res)=>{
       res.send("your / route iss here ");
});




app.listen(7777);
