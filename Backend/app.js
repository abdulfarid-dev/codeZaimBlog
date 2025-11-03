import express from 'express'
const app=express()
import mongoose from 'mongoose'
import UserRoutes from './routes/userRoutes.js'
import cors from 'cors'


// ✅ 1. Enable CORS (before routes)
app.use(cors({
  origin: "http://localhost:5173", // frontend URL
  credentials: true
}));

app.use(express.json())



app.use('/user',UserRoutes)


mongoose.connect('mongodb+srv://blog-application-username:sa44hStECgTn9R19@blog-cluster.fxxaqj0.mongodb.net/?retryWrites=true&w=majority&appName=blog-cluster')
    .then(()=>{console.log("mongodb connected successfully")})
    .catch((err)=>{console.log(err)})

    








let port=5000;

app.listen(port,()=>{
    console.log("port is running on 5000")
})