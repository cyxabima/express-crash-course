const express = require('express');
const path = require('path')
require("dotenv").config()

const app = express();
const port = process.env.PORT || 8090;

// setup static folder
// app.use(express.static(path.join(__dirname,"public")))

let post = [
    {
        id: 1, title: "post1"
    },
    {
        id: 2, title: "post2"
    },
    {
        id: 3, title: "post3"
    },
];

// get all post
app.get("/api/posts", (req, res) => {
    res.json(post)
})

// get single post 

app.get("/api/posts/:id", (req, res)=>{
    const id = parseInt(req.params.id)
    res.json(post.filter((post)=> post.id == id))
})




app.listen(port, () => console.log("server is listening on", port));
