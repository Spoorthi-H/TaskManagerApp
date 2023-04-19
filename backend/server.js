const dotenv = require("dotenv").config();
const express = require("express");
//const Task = require("./model/taskModel.js");
const taskRoutes = require("./routes/taskRoute.js")
const cors = require("cors");
const path = require("path");
const BASE_URI = process.env.BASE_URI;


const app = express();

const connectDB = require("./config/connectDB");

const PORT = process.env.PORT || 5000;


//express middleware
app.use(express.json())
app.use(express.urlencoded({extended:false}));
app.use(cors({origin: [`${BASE_URI}`, "https://mern-task-app.onrender.com"],}));
//cors
app.use(cors());
//Routes
app.get("/",(req,res)=>{
    res.send("Home Page");
})
app.use("/api/tasks",taskRoutes);

//Deployment code static files

    /*app.use(express.static(path.join(__dirname,"../frontend/build")))

    app.get("*",(req,res)=>{
        res.sendFile(
            path.resolve(__dirname,"../","frontend","build","index.html")
        )
    })*/


const startserver = async () => {
    try {
        await connectDB();
        app.listen(PORT,()=>{
            console.log(`Server is running on ${PORT}`);
        });
    } catch (error) {
        console.log(error);
    }
}
startserver();
