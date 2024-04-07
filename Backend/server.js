import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/authroutes.js"
import messageRoutes from "./routes/messageroutes.js"
import userRoutes from "./routes/userroutes.js"
import connectToMongodb from "./DB/connectToMongodb.js";
import cookieParser from "cookie-parser";

const app = express();
const PORT = process.env.PORT || 5000;

dotenv.config();

app.use(express.json());  //parse incoming request with json payloads
app.use(cookieParser());
app.use("/api/auth", authRoutes)
app.use("/api/messages", messageRoutes)
app.use("/api/users", userRoutes)


// app.get("/", (req, res)=>{
//    res.send("hello world");
// });


app.listen(PORT,() => {
    connectToMongodb();
    console.log(`Server is running on port ${PORT}`);

});