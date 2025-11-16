const express=require("express");
const connectDB=require("./config/database.js");
const User=require("./models/user.js")
const app=express();

app.use(express.json());

app.post("/signup",async(req,res)=>{

      console.log(req.body);
      const user=new User(req.body);
      
       // const user=new User({
       //        firstName:"virat",
       //        lastName:"kohli",
       //        emailId:"virat@gmail.com",
       //        password:"virat@1234",
       // });
     try{
       await user.save();
       // throw new exception();
       res.send("user added successfully");
     }
     catch(err){
       res.status(400).send("bad request "+err.message);
     }

});

app.get("/user",async (req,res)=>{
  const userEmail=req.body.emailId;
  
try{
  console.log(userEmail);
  const user =await User.findOne({emailId:userEmail});
  if(!user){
    res.status(404).send("user not found");
  }else{
    res.send(user);
  }
}
catch(err){
  res.status(400).send("Somethig went Wrong");
}
});

app.get("/feed",async(req,res)=>{

  try{
  const user=await User.find({});
  res.send(user);
  }
  catch(err){
    res.status(400).send("Something went wrong ");

  }
})

app.delete("/delete",async(req,res)=>{
  const userId=req.body.userId;
  try{
    const user=await User.findByIdAndDelete(userId);
    res.send("User deleted successfully");

  }catch(err){
    res.status(400).send("Something went wrong ");
  }
})

app.patch("/patch",async(req,res)=>{
  const userId=req.body.userId;
  const data=req.body;
  // console.log(data);

  try{
  const user=  await User.findByIdAndUpdate({_id:userId},data,{returnDocument:"after"});
    res.send("User updated succesfully");
    console.log(user);
  }
  catch(err){
    res.status(400).send("Something went wrong");
  }

})


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





