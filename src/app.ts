import express, { urlencoded } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app : express.Application = express();
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}));

app.use(express.json({limit: "16kb"}));
app.use(urlencoded({extended:true,limit: "16kb"}));
app.use(express.static("public"));
app.use(cookieParser());

// routes
import userRouter from "./routes/user.routes.js"

app.use("/api/v1/user", userRouter)


export default app;