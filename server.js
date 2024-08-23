const express = require('express');
const studentsRoutes = require('./src/student/routes')
const dotenv = require('dotenv');
const app = express();


dotenv.config({
    path: './.env'
})

app.use(express.json());

app.use('/api/v1/students', studentsRoutes);


// app.get("/", (req,res)=>{
//     res.send("Hello World")
// })
app.listen(process.env.PORT, ()=>{
    console.log(`Server is running at port no. ${process.env.PORT}`)
})