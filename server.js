import express from 'express';
import post  from './routes/posts.route.js';
import dotenv from "dotenv"
dotenv.config()

const app = express();
const port = process.env.PORT || 8090;

app.use("/api/posts", post)

// setup static folder
// app.use(express.static(path.join(__dirname,"public")))








app.listen(port, () => console.log("server is listening on", port));
