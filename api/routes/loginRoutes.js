const roteador = require('express').Router();
const loginController = require('../controllers/loginController');

roteador.get('/authenticate',async function(requisition,response){
    
     const {userEmail, userSenha} = requisition.body;
     
     if(userEmail && userSenha){

          await loginController.authenticateLogin(userEmail,userSenha)
               .then((match) => {
                    response.send(match);
               })
               .catch((error) => {
                    response.send(error.message); 
               });        
          
     }
     else{
          response.status(400).send("Preencha todos os campos");
     }
});

module.exports = roteador;