const express = require('express')
const router = express.Router()
 // checks the requests from top to bottom in order
router.get("/", (req, res) => {
    res.send('User List')
})

router.get("/new", (req, res) => { // must be above /:id
    res.send('User New')
})

router.post('/', (req, res) => {
    res.send('Testing the post')
})
/*
The old way...

router.get('/:id', (req, res) => {
    res.send(`User Get ${req.params.id}`)
})

router.put('/:id', (req, res) => {
    res.send(`User Update ${req.params.id}`)
})

router.delete('/:id', (req, res) => {
    res.send(`User Delete ${req.params.id}`)
})

Following is the new way */

router
    .route("/:id")
    .get( (req, res) => {
        res.send(`User Get 44 ${req.params.id} has number ${req.user}`)
    })
    .put((req, res) => {
        res.send(`User Update ${req.params.id}`)
    })
    .delete((req, res) => {
        res.send(`User Delete ${req.params.id}`)
    })

const users = [1,1,2,3,5,8,13]
router.param("id", (req,res,next,id) => {
    req.user = users[id]
    console.log(id)
    next() // runs the next function (that is, the .get)
})


module.exports = router