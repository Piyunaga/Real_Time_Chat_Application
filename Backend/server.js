import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/authroutes.js"
import connectToMongodb from "./DB/connectToMongodb.js";

const app = express();
const PORT = process.env.PORT || 5000;

dotenv.config();

app.use(express.json());  //parse incoming request with json payloads
app.use("/api/auth", authRoutes)

// app.get("/", (req, res)=>{
//    res.send("hello world");
// });


app.listen(PORT,() => {
    connectToMongodb();
    console.log(`Server is running on port ${PORT}`);

});