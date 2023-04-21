//importing dotenv to mask secret keys and strings
require("dotenv").config()
//getting instance of express
const express = require('express');
const app = express();
//defining to port to run express server
const PORT= process.env.PORT || 5000;
//getting connection function which we created
const connectDB = require("./db/connect");

//defining home route controller
app.get("/",(req,res)=>{
    res.send("Hi I am live")
})

//acknowledging created routes
const user_routes= require("./routes/users");
const issues_routes = require("./routes/issues");
const projects_routes = require("./routes/projects");


//middleware or to set router 
app.use("/api/auth/",user_routes);
app.use("/api/projects/",projects_routes);
app.use("/api/issues/",issues_routes);

//start function to start the server
const start = async ()=>{
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(PORT,()=>{
            console.log(`${PORT} Connected!`)
        })
        
    } catch (error) {
        console.log(error);
    }
}
//we can use npm run dev to run the nodemon server as configured in the package.json file
start()