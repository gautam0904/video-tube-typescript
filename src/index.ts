import dotenv from "dotenv";
import app from "./app.js";
import connectDB from "./db/index.js"

dotenv.config({path :'./env'})


connectDB()
.then(()=>{
    app.on('error',(err)=>{
        console.log(err);
    });
    app.listen(process.env.PORT ,()=>{
        console.log(`Server is running on port ${process.env.PORT}`);
    })
})
.catch((err : any)=>{
    console.log(`mongoDB is failed!!`);
})










