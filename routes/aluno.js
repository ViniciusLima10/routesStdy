var express = require('express');
var router = express.Router();

let alunos = [
    { id: 0, nome: "joao" },
    { id: 1, nome: "lucas" },
    { id: 2, nome: "jose" },
    { id: 3, nome: "davi"}
]

router.get("/", (req, res, next) => {
    
    console.log(req.body);
    let aluno = alunos[req.body.id] 
    if(aluno) {

        res.json(aluno)
    }else {
        next()
    }
})

router.get("/", (req, res, next) => {
    
    console.log(req.query);
    let aluno = alunos[req.query.id] 
    if(aluno) {

        res.json(aluno)
    }else {
        res.send("Aluno nao encontrado")
    }
})

router.get("/all", (req, res) => { 
    res.json(JSON.stringify(alunos))
})

router.get("/:id", (req, res) => {
    
    console.log(req.params.id);
    let aluno = alunos[req.params.id] 
    res.json(aluno)
})

module.exports = router;