const express = require('express');
const path = require('path')

const app = express()
app.use(express.urlencoded());

app.get('/' , (req,res) =>{
    res.sendFile(path.join(__dirname,"index.html"))
})
app.post('/signup',(req,res,next) =>{
    const value= JSON.stringify(req.body.name)
    const name = value.name;
    res.send(`<h1>${value}</h1>`)
})

app.listen(4000,()=>{
    console.log("server started")
})