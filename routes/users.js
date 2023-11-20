const express = require('express')
const router = express.Router()

router.get("/", (req, res) => {
    res.send('User List')
})

router.get("/new", (req, res) => {
    res.send('User New')
})

router.post('/', (req, res) => {
    res.send('Testing the post')
})

router.get('/:id', (req, res) => {
    res.send(`User Get ${req.params.id}`)
})

module.exports = router