//IMPORTAÇÃO DO EXPRESS
//const express = require('express')
import express from 'express'

//CRIA O OBJETO APP QUE TEM TODAS AS FUNÇÕES DO EXPRESS
const app = express()

// CRIANDO A ROTA GET NO ENDEREÇO / (RAIZ: http://localhost:300)
app.get('/', (req, res) => {
    return res.json({
        message: "Chamada a rota GET!",
    })
})

// ROTA POST 
app.post('/', (req, res) => {
    return res.json({
        message: "Chamada a rota POST!",
    })
})

// ROTA DELETE
app.delete('/', (req, res) => {
    return res.json({
        message: "Chamada a rota DELETE!",
    })
})

// ROTA PUT
app.put('/', (req, res) => {
    return res.json({
        message: "Chamada a rota PUT!",
    })
})


// ROTA PATCH
app.patch('/', (req, res) => {
    return res.json({ message: "Chamada a rota PATCH" })
})


app.delete('/user', (req, res) => {
    return res.json({
        message: "Chamado a rota DELETE no Endpoint /user"
    })
})



// SOBE O SERVIDOR E FICA OUVINDO AS ROTAS CRAIDAS ANTERIORMENTE
app.listen(3000, () => {
    console.log('Servidor Rodando no http://localhost:3000')
})
