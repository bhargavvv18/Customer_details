const express=require('express')

const dotenv=require('dotenv')

const app=express()

const mongoose=require('mongoose')

const bodyparser=require('body-parser')

const employeeRoutes=require('./router/routerEmployee')

const cors=require('cors')

dotenv.config()

app.use(cors({
    origin: 'http://localhost:3000' // Replace with your frontend URL
  }));
  

const PORT=process.env.PORT||8000

app.use(bodyparser.json())

mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    console.log("Database connected succesfully")
})
.catch((err)=>{
    console.log(`${err}`)
})

app.use('/employee',employeeRoutes)

app.get("/",(req,res)=>{
    res.send("HIII....welcome to ther webpage")
})


app.listen(PORT,()=>{
    console.log(`Server started and running succesfully at ${PORT}`)
})

