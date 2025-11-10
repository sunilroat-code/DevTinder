const express=require("express");
const connectDB=require("./config/database.js");
const User=require("./models/user.js")
const app=express();

app.post("/signup",async(req,res)=>{
       const user=new User({
              firstName:"virat",
              lastName:"kohli",
              emailId:"virat@gmail.com",
              password:"virat@1234",
       });
     try{
       await user.save();
       // throw new exception();
       res.send("user added successfully");
     }
     catch(err){
       res.status(400).send("bad request "+err.message);
     }

});


connectDB()
.then(()=>{
       console.log("Database connection established");

       app.listen(7777,()=>{
       console.log("listening on 7777");
});
})
.catch((err)=>{
       console.log("Database cannot be connected");
});





