const express = require("express");
const app = express();
const port = 3030; 
const path = require("path");

// app.listen(port, () => {
//     console.log("Sv iniciado correctamente");
// });

app.listen(process.env.PORT || 3030, function(){
    console.log("Servidor corriendo en el puerto" + process.env.PORT)
});

app.use(express.static(path.join(__dirname, "/public")));

app.get("/", (req, res) => {
    res.sendFile(path.join (__dirname, "/views/home.html"))
});

app.get("/register", (req, res) => {
    res.sendFile(path.join (__dirname, "/views/register.html"))
});

app.get("/login", (req, res) => {
    res.sendFile(path.join (__dirname, "/views/login.html"))
});

app.post("/", (req, res) => {
    res.sendFile(path.join (__dirname, "/views/home.html"))
});