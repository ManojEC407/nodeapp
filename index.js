const express = require('express')


const app = express()


const PORT = 8080

app.get("/",(req,res)=>{
    console.log(req)

    res.send("Hello")
})


app.listen(PORT,()=>{
    console.log(`Server is running on ${PORT}`)
})