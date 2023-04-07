import express from "express"
import dotenv from "dotenv"
import cors from "cors"

dotenv.config()

const app= express()
app.use(cors())

const port = 5000;

app.use(express.json({limit: "50mb"}))

app.get("/",(req,res)=>{
res.status(200).json({message: "Hello from home"})
})

app.listen(port,()=>{
    console.log(`server is running on port${port}`)
})