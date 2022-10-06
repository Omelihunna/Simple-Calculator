const express = require("express");
const app = express()

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
})

app.listen(3000, () => {
    console.log("Server Started on Port 3000!!!")
})