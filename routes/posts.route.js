import express from 'express'

const router = express.Router();

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
// since we are defining router in middleware in server.js if we also define here it will become redundant
router.get("/", (req, res, next) => {
    const limit = parseInt(req.query.limit)
    // console.log(limit)
    if (!isNaN(limit) && limit > 0) {
        return res.status(200).json(posts.slice(0, limit))
    }
    res.json(posts)
})


// get single post 

router.get("/:id", (req, res, next) => {
    const id = parseInt(req.params.id)
    const post = posts.find((post) => post.id == id)
    // console.log(post)
    if (!post) {
        const error = new Error(`A post with id ${id} don't exist`)
        error.status = 404
        next(error)
    }
    res.json(post)
})


// creating a post request to posts
router.post("/", (req, res) => {
    console.log(req.body)

    const newPost = {
        id: posts.length + 1,
        title: req.body.title
    }
    if (!newPost.title) {
        const error = new Error(`title is not defined`)
        error.status = 404
        next(error)
    }
    posts.push(newPost)
    res.status(201).json(posts)
})

// updating post 

router.put("/:id", (req, res, next) => {
    const id = parseInt(req.params.id);

    const post = posts.find((post) => post.id === id)

    if (!post) {
        const error = new Error(`A post with id ${id} don't exist`)
        error.status = 400
        return next(error)
    }
    post.title = req.body.title
    res.status(200).json(posts)
})

router.delete("/:id", (req, res, next) => {
    const id = parseInt(req.params.id);
    const post = posts.find((post) => post.id === id)

    if (!post) {
        const error = new Error(`post with this id doesn't exist`)
        error.status = 400
        return next(error)
    }
    posts = posts.filter((post) => post.id !== id)
    res.status(200).json(posts)
})


export default router