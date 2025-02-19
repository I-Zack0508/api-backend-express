import express from 'express'

const router = express.Router()

// GET
router.get('/', (req, res) =>{
    return res.json({
        message: "Resposta do Router GET/product/"
    })
})

//POST
router.post('/', (req, res) =>{
    return res.json({
        message: "Resposta do Router POST/product/"
    })
})

//PUT
router.put('/', (req, res) =>{
    return res.json({
        message: "Resposta do Router PUT/product/"
    })
})

//DELETE
router.delete('/', (req, res) =>{
    return res.json({
        message: "Resposta do Router DELETE/product/"
    })
})

//PATCH
router.patch('/', (req, res) =>{
    return res.json({
        message: "Resposta do Router PATCH/product/"
    })
})

export default router