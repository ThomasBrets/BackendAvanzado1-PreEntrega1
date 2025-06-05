const express = require("express")
const app = express()
const fs = require("fs")
const path = require("path")
const routes = require("./routes")


app.use(express.json())

app.use("/api", routes)

app.use("/", (req, res) => {
    res.send("funciona el servidor");
})



const port = 8080

app.listen(port, ()=> {
    console.log(`Servidor abierto en puerto:${port}` );
})