const express = require('express');
const post = require('./routes/posts.route.js')
require("dotenv").config()

const app = express();
const port = process.env.PORT || 8090;

app.use("/api/posts", post)

// setup static folder
// app.use(express.static(path.join(__dirname,"public")))








app.listen(port, () => console.log("server is listening on", port));
