const roteador = require('express').Router();
const loginController = require('../controllers/loginController');
const userHelper = require('../helpers/UserHelper');
const bcrypt = require('bcryptjs')

roteador.get('/authenticate',async function(requisition,response){
    
     const {userEmail, userSenha} = requisition.body;
     
     if(userEmail && userSenha){

          const authencation = await loginController.authenticateLogin(userEmail,userSenha);          
          if(authencation){ response.send("logado");}
          else{response.send("erro ao logar");}
          
     }
     else{
          response.status(400).send("Preencha todos os campos");
     }
});

module.exports = roteador;