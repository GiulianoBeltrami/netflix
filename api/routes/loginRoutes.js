const roteador = require('express').Router();
const loginController = require('../controllers/LoginController');

roteador.get('/authenticate', function(requisition,response){
    //realizar autentificação dos dados que virão em json
 
    const userId = loginController.authenticateLogin(requisition.body.email,requisition.body.senha);
    if(userId){
        response.send("OK");
    }
    else{
        response.send("Erro");
    }
});


module.exports = roteador;