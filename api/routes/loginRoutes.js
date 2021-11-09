const roteador = require('express').Router();
const loginController = require('../controllers/loginController');

roteador.get('/authenticate',async function(requisition,response){
    
     const {userEmail, userSenha} = requisition.body;

     //validação de preenchimento dos campos

     await loginController.authenticateLogin(userEmail,userSenha)
          .then((match) => {
               response.status(200);
               response.send(match);
          })
          .catch((error) => {
               response.status(400);
               response.send(error.message); 
          });    
     

});

module.exports = roteador;