const express = require ('express')
const cors = require ('cors')
const app = express()
const connectDB = require('./db')
const BMI = require("./BMImodel")
const createError = require('http-errors')
require('dotenv').config()


connectDB()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.get('/',async(req,res)=>{
    const data = await BMI.find()
    res.json(data)
  
})
app.post('/',async(req,res)=>{
    const {height,weight}=req.body
    console.log(height)
    console.log(weight)
    try {
     if(!height || !weight) throw createError(401,'Both fields are required')
       const bmi = (weight*10000)/(height*height)
       console.log(bmi)
       const data = await BMI.create({
           height,weight,bmi
       })
       res.json(data)

    } catch (error) {
        res.json(error)
    }
})



const port = process.env.PORT || 3001

app.listen(port,()=>console.log(`server is running at port ${port}`))