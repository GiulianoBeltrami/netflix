const roteador = require('express').Router();
const loginController = require('../controllers/loginController');

roteador.get('/authenticate',async function(requisition,response){
    
 
   const {userEmail, userSenha} = requisition.body;
   
   if(userEmail && userSenha){
       //Função de verificar se o usuário existe-> usada mais de uma vez, abstrair
        //verificar se o usuário existe

        //fazer comparacao da senha digitada e a do banco

            //retornar -> OK

            //retorn   -> inválido
   }
   else{
        response.status(400).send("Preencha todos os campos");
   }
});

module.exports = roteador;