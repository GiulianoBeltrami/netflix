const roteador = require('express').Router();
const loginController = require('../controllers/loginController');
const fieldHelper = require('../helpers/FieldHelper');

roteador.get('/authenticate',async function(requisition,response){
    
     const {userEmail, userSenha} = requisition.body;

     //validação de preenchimento dos campos
     if(!isLoginFieldsFilled()){
          return response.send("Usuário ou senha vazio");
     }

     await loginController.authenticateLogin(userEmail,userSenha)
          .then((match) => {
               response.status(200);
               response.send(match);
          })
          .catch((error) => {
               response.status(400);
               response.send(error.message); 
          });    
     

     function isLoginFieldsFilled(){
          return fieldHelper.isFieldFilled(userEmail) && fieldHelper.isFieldFilled(userSenha);
     } 

});



module.exports = roteador;