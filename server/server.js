require('dotenv').config()
const express = require('express')
const cors = require('cors')

const {PORT} = process.env

const app = express()

app.use(express.json())
app.use(cors())

const { signUp, unsubscribe } = require("./controller");


app.post("/api/sign-up", signUp);





app.listen(PORT, () => {
    console.log(`server listening on port ${PORT}`)
})