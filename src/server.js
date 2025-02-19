//IMPORTAÇÃO DO EXPRESS
//const express = require('express')
import express from 'express'
import userRouter from './routers/userRouter.js'
import productRouter from './routers/productRouter.js'

//CRIA O OBJETO APP QUE TEM TODAS AS FUNÇÕES DO EXPRESS
const app = express()

// CRIANDO A ROTA GET NO ENDEREÇO / (RAIZ: http://localhost:300)
app.get('/', (req, res) => {
    return res.json({
        message: "Chamada a rota GET!",
    })
})

app.use('/user', userRouter)
app.use('/product', productRouter)

// SOBE O SERVIDOR E FICA OUVINDO AS ROTAS CRAIDAS ANTERIORMENTE
app.listen(3000, () => {
    console.log('Servidor Rodando no http://localhost:3000')
})
