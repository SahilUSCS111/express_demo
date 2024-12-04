import express from 'express';

const app = express()

const port = 300
app.get("/",(req,res) =>{
    res.send("Hello from Sahil and his coffee!")
})

app.get("/ice-coffee",(req,res) =>{
    res.send("What kind of coffee would u prefer?")
})

app.get("/twitter",(req,res) =>{
    res.send("sahil akhtar twitter account")
})
app.listen(port,() =>{
    console.log(`Server is running at port: ${port}`)
})