const roteador = require('express').Router();
const loginController = require('../controllers/loginController');
const userHelper = require('../helpers/UserHelper');

roteador.get('/authenticate',async function(requisition,response){
    
 
   const {userEmail, userSenha} = requisition.body;
   
   if(userEmail && userSenha){
       //Função de verificar se o usuário existe-> usada mais de uma vez, abstrair
       const isUserRegistred = await userHelper.isUserRegistred(userEmail);
       if(isUserRegistred){
            //fazer comparacao da senha digitada e a do banco

                //retornar -> OK

                //retorn   -> inválido
   
       }
       else{
          throw new Error('Usuário não encontrado'); 
        }
        }
   else{
        response.status(400).send("Preencha todos os campos");
   }
});

module.exports = roteador;