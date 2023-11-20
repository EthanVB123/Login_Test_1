const express = require("express")
const app = express()

app.set('view engine', 'ejs')

app.get('/', (req, res) => { // When searching the root directory, do this
    console.log('Greetings and welcome!')
    res.render('index')
})

app.listen(3000) // listen for requests on port 3000