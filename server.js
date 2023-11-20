const express = require("express")
const app = express()

app.set('view engine', 'ejs')

app.get('/', (req, res) => { // When searching the root directory, do this
    console.log('Greetings and welcome!')
    res.render('index', {text: "lskdjf"})
})


const userRouter = require("./routes/users.js")

app.use('/users', userRouter)

app.listen(3000) // listen for requests on port 3000