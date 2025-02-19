const express = require('express');
const path = require('path')
require("dotenv").config()

const app = express();
const port = process.env.PORT || 8090;

// setup static folder
// app.use(express.static(path.join(__dirname,"public")))

let posts = [
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
// adding query strings
app.get("/api/posts", (req, res) => {
    const limit  = parseInt(req.query.limit)
    // console.log(limit)
    if(!isNaN(limit) && limit > 0){
        res.status(200).json(posts.slice(0,limit))
    }
    else{
        res.json(posts) 
    }
})

// get single post 

app.get("/api/posts/:id", (req, res)=>{
    const id = parseInt(req.params.id)
    const post = posts.find((post)=> post.id == id)
    console.log(post)
    if(!post){
        res.status(404).json({"msg": `post on id: ${id} is not available `})
    }else{
        res.json(post)
    }
})




app.listen(port, () => console.log("server is listening on", port));
