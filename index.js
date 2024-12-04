import express from "express";
const app = express();
const port = 3000;
app.use(express.json())
let teaData = []
let nextId = 1

// add a new tea

app.post("/teas",(req,res) =>{
   const {name, price} =  req.body
   const newTea = {id:nextId++,name,price}
   teaData.push(newTea)
   res.status(201).send(newTea)
})

// get all the data

app.get("/teas",(req,res) =>{
    res.status(200).send(teaData);
})

// Get a tea with id

app.get("/teas/:id",(req,res) =>{
    let tea = teaData.find(t => t.id == parseInt(req.params.id))
    if(!tea){
        return res.status(404).send("Tea not found")
    }
    res.status(200).send(tea);
})

// update tea

app.put("/teas/:id",(req,res) =>{
    let tea = teaData.find(t => t.id == parseInt(req.params.id))
    if(!tea){
        return res.status(404).send("Not able to find id")
    }
    const {name,price} = req.body
    tea.name = name;
    tea.price = price;

})



app.listen(port,() =>{
    console.log(`Server is running at port: ${port}`)
})