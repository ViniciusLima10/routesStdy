var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var aluno = require("./routes/aluno");



app.use(bodyParser.urlencoded())

app.use("/aluno", aluno)

app.get("/", (req, res) => {
    res.send("Hello World!")
})

app.listen(3000, (req, res) => { console.log("server running on port 3000") })