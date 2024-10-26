require('dotenv').config()
const express = require('express')

const app = express()
const port = process.env.PORT2

app.get('/', (req, res) => {
   res.send('Hello World!')
})
app.get('/twitter', (req,res) => {
    res.send("Nabin Sapkota")
})

app.get('/login', (req, res) => {
    res.send("Welcome to my page <br> " +
        "<h1> Please login guys</h1>")
})

app.get('/youtube', (req, res) => {
    res.send("This is not youtube <br>" + 
        "<h2> This is my application </h2> "
    )
})

app.get('/Nabin', (req, res) => {
    res.send("Hellllllllllllllooooooo")
})
app.listen(port, () => {
   console.log(`Example app listening on port ${port}`)
})