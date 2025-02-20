import express from 'express';
import post from './routes/posts.route.js';
import dotenv from "dotenv"
import logger from './middleware/logger.js';
import errorHandler from './middleware/errorHandler.js';
import notFound from './middleware/notFound.js';
import { fileURLToPath } from "url"
import path from 'path';
dotenv.config()

// __dirname is not available in module js 
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
// console.log(__filename);
// console.log(__dirname)


const app = express();
const port = process.env.PORT || 8090;

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
// setting up the logger middleware 
app.use(logger)
// setup static folder
app.use(express.static(path.join(__dirname,"public")))
// post router middleware setup
app.use("/api/posts", post)

// error handler middleware
app.use(notFound)
app.use(errorHandler)










app.listen(port, () => console.log("server is listening on", port));
