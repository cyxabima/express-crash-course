const logger = (req, res, next) => {
    console.log(
        `${req.method} ${req.protocol}://${1}${req.hostname}/${req.originalUrl}
        `)
        next()
}


export default logger