import express from 'express';
import post  from './routes/posts.route.js';
import dotenv from "dotenv"
import logger from './middleware/logger.js';
import errorHandler from './middleware/errorHandler.js';
dotenv.config()

const app = express();
const port = process.env.PORT || 8090;

app.use(express.json())
app.use(express.urlencoded({extended: true}))
// setting up the logger middleware 
app.use(logger)
app.use("/api/posts", post)

// error handler middleware

app.use(errorHandler)

// setup static folder
// app.use(express.static(path.join(__dirname,"public")))








app.listen(port, () => console.log("server is listening on", port));
