const express = require('express');

const app = express();

const port = 4090;

app.get("/", (req, res)=>{
    res.send("Hello Home")
})
app.get("/about", (req, res)=>{
    res.send("Hello about")
})


app.listen(port, ()=> console.log("server is listening on", port));
