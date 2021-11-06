const roteador = require('express').Router();
const registerController = require('../controllers/registerController');


roteador.post('/',async function(requisition,response){

    const {userEmail, userSenha} = requisition.body;

    if(userEmail && userSenha){
        
        await registerController.registerUser(userEmail,userSenha)
            .then((user) => {
                response.status(201);
                response.json(user);
            })
            .catch((error) => {
                response.status(400);
                response.send(error.message);
            });
        
    }
    else{
        response.status(400);
        response.send("Preencha todos os campos");
    }
})

module.exports = roteador;