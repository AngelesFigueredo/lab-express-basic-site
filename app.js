const express = require("express")
const path = require("path")

const app = express()

app.use(express.static("public"))


app.get("/", (request, response, next)=>{
    const filePath = path.join(__dirname, "views", "index.html")
    response.sendFile(filePath)
})

app.get("/about", (request, response, next)=>{
    response.sendFile(path.join(__dirname, "views", "about.html"))
})

app.get("/works", (request, response, next)=>{
    response.sendFile(path.join(__dirname, "views", "works.html"))
})

const port = 3000

app.listen(port, ()=>{})


