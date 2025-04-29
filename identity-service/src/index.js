import dotenv from "dotenv"
import connectDB from "./db/index.js"
import {app} from "./app.js"
import {logger} from "./utils/logger.js"

dotenv.config()

connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000, ()=>{
        logger.info(`Identity service running on port ${process.env.PORT}`)
    })
})
.catch((err)=>{
    console.log(`MongoDB connection failed `, err)
})
