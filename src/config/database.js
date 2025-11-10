const mongoose=require("mongoose");

const connectDB=async()=>{
    await mongoose.connect(
        "mongodb+srv://sunilroat7takatak_db_user:ZC7d20BpEH4wKQb3@devtinder.0pefquw.mongodb.net/"
    );
};

module.exports=connectDB;

// mongodb+srv://sunilroat7takatak_db_user:<db_password>@devtinder.0pefquw.mongodb.net/