const express = require("express")
const app = express()
app.use(express.static("public")) // folder for static html etc. files
app.set('view engine', 'ejs')
app.use(logger) // happens every time because at the top of the file
app.get('/',/*logger,*/ (req, res) => { // When searching the root directory, do this
    console.log('Greetings and welcome!')
    res.render('index', {text: "lskdjf"})
})


const userRouter = require("./routes/users.js")

app.use('/users', userRouter)

// It's middleware time!
function logger(req, res, next) {
    console.log(req.originalUrl)
    next()
}
app.listen(3000) // listen for requests on port 3000