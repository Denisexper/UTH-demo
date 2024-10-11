
import express from "express"
import cors from "cors"
import UserRoute from "./routes/UserRoute.js"

//we'll create our server
const app = express();
//Become json response
app.use(express.json())

//hability thecors
app.use(cors())

//define a port
const PORT = process.env.port ?? 3000
//call the routes
app.use(UserRoute)

// running the server
app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`);
})