import mongoose from "mongoose";

mongoose.connect(process.env.DATABASE_URL,)
.then(()=>{

    console.log("DB connected successfully")
}).catch((error) =>{
    console.log("Unable to connected to database", error)
})