const express = require ("express");
const path = require ("path");
const app = express();

app.use (express.static("public"))

app.listen (process.env.PORT || 3000, () => 
console.log ("Servidor corriendo en el puerto 3000")
);

app.get ("/", (req, res) => {
    res.sendFile (path.join (__dirname, "/views/home.html"));
});

app.get ("/Register", (req, res) => {
    res.sendFile (path.join (__dirname, "/views/Register.html"));
});

app.get ("/Login", (req, res) => {
    res.sendFile (path.join (__dirname, "/views/Login.html"));
});
