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


// @dec get all post
// route GET /api/posts

export const getPosts = (req, res, next) => {
    // adding query strings
    const limit = parseInt(req.query.limit)
    // console.log(limit)
    if (!isNaN(limit) && limit > 0) {
        return res.status(200).json(posts.slice(0, limit))
    }
    res.json(posts)
}


// @dec get post by id
// route GET /api/post:id

export const getPost = (req, res, next) => {
    const id = parseInt(req.params.id)
    const post = posts.find((post) => post.id == id)
    // console.log(post)
    if (!post) {
        const error = new Error(`A post with id ${id} don't exist`)
        error.status = 404
        next(error)
    }
    res.json(post)
}


// @dec Add new post 
// route POST /api/posts

export const createPost = (req, res, next) => {
    // console.log(req.body)

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
}


// @dec Update post
// route PUT /api/posts/:id

export const updatePost = (req, res, next) => {
    const id = parseInt(req.params.id);

    const post = posts.find((post) => post.id === id)

    if (!post) {
        const error = new Error(`A post with id ${id} don't exist`)
        error.status = 400
        return next(error)
    }
    post.title = req.body.title
    res.status(200).json(posts)
}


// @dec Delete post
// route DELETE /api/posts/:id

export const deletePost = (req, res, next) => {
    const id = parseInt(req.params.id);
    const post = posts.find((post) => post.id === id)

    if (!post) {
        const error = new Error(`post with this id doesn't exist`)
        error.status = 400
        return next(error)
    }
    posts = posts.filter((post) => post.id !== id)
    res.status(200).json(posts)
}