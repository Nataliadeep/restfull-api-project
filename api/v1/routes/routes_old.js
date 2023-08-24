const db = require('../../../models');
const {Router} = require('express');

const router = Router();

router.get("/", (req,res)=>{
    res.send({Title:'Hello ADSO!!'});
});

module.exports = router;

router.post('/new', async (req,res)=>{
    let name = req.body.name;
    let email = req.body.email;
    let phone = req.body.phone;
    let password = req.body.password;
    try {
        await db.User.create({
            name,
            email,
            phone,
            password,
        });
        res.status(200).send('Usuario creado');
    }catch (error){
        res.status(400).send('Usuario no pudo ser creado')
    }
});

router.get('/all', async(req,res)=>{
    try{
        let users = await db.User.findAll();
        res.status(200).send({status:'ok',message:"Users listed!", data:user})
    }catch(error){
        res.status(400).send({status:'FAIL',message:"Users error!", data:null})
    }
})

router.get('/:id', async (req,res) => {
    try {
        let id = req.params.id;
        let users = await db.User.findByPk(id);
        res.status(200).send(users);
    }catch(error){
        res.status(400).send('No se puede obtener el usuario')
    }
})

router.put('/:id', async (req, res) => {
    try {
        let id = req.params.id;
        let {name, email, phone, password} =req.body;
        await db.User.update(
            {name, email, phone, password},
            {
                where:{
                    id,
                }
            }
        );
        res.status(200).send("Usuario actualizado correctamente");
    }catch(error){
        res.status(400).send('No se puede obtener el usuario')
    }
})


router.delete('/:id', async (req, res) => {
    try {
        let id = req.params.id;
        await db.User.destroy(
            {
                where:{
                    id,
                }
            }
        );
        res.status(200).send("Usuario actualizado correctamente");
    }catch(error){
        res.status(400).send('No se puede obtener el usuario')
    }
});



module.exports = router


