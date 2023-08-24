const userService = require('../services/userService')

const getAllUsers = async(req,res)=>{
    try{
        const  allUsers = await userService.getAllUsers();
        res.status(200).send({status:'OK', data: allUsers})
    }catch(error){
        res.status(error.status || 500).send({status: 'FAILED', data: { error: error.message} })
    }
}

const getUser = async(req,res)=>{
    try{
        let id = req.params.userId
        const user = await userService.getUser(id)
        res.status(200).send({status: 'OK', data:user})
    }catch(error){
        res.status(error.status || 500).send({status: 'FAILED', data: { error: error.message} })
    }
}

const createUser = async (req,res)=>{
    try{
        const {body} = req
        console.log(body.name)
        const createUser = await userService.createUser(body.name, body.email, body.phone, body.password)
        res.status(201).send({status: 'OK', data:createUser})
    }catch(error){
        res.status(error.status || 500).send({status: 'FAILED', data: { error: error.message} })
    }
}

const updateUser = async (req, res)=>{
    try{
        const id = req.params.userId
        let {name, email, phone, password} = req.body;
        const updateUser = userService.updateUser(id, name, email, phone, password)
        res.status(200).send({status: 'OK', data:updateUser})
    }catch(error){
        res.status(error.status || 500).send({status: 'FAILED', data: { error: error.message} })
    }
}

const deleteUser = async (req, res)=>{
    try{
        const id = req.params.userId
        const deleteUser = userService.deleteUser(id)
        res.status(200).send({status: 'OK', data:deleteUser})
    }catch(error){
        res.status(error.status || 500).send({status: 'FAILED', data: { error: error.message} })
    }
}

module.exports = {
    getAllUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser
}
