import express from 'express'
import createUserController from '../controllers/user/createUserControler'
import deleteUserController from '../controllers/user/deleteUserController'
import editNameUserController from '../controllers/user/editNameUserController'
import getUserControlelr from '../controllers/user/getUserController'
import updateUserController from '..//controllers/user/updateUserController'


const router = express.Router()

// GET
router.get('/', (req, res) =>{
    return res.json({
        message: "Resposta do Router GET/user/"
    })
})

//POST
router.post('/', (req, res) =>{
    return res.json({
        message: "Resposta do Router POST/user/"
    })
})

//PUT
router.put('/', (req, res) =>{
    return res.json({
        message: "Resposta do Router PUT/user/"
    })
})

//DELETE
router.delete('/', (req, res) =>{
    return res.json({
        message: "Resposta do Router DELETE/user/"
    })
})

//PATCH
router.patch('/', (req, res) =>{
    return res.json({
        message: "Resposta do Router PATCH/user/"
    })
})

export default router