const modelDatabase = require('../../database/models');
const bcrypt = require('bcryptjs');
const userHelper = require('../helpers/UserHelper');

module.exports = {


    async authenticateLogin(userEmail,userPassword){

        const isUserRegistred = userHelper.isUserRegistred(userEmail);

        if (isUserRegistred){
            //fazer comparacao da senha digitada e a do banco
            const userPasswordEncrypted = await userHelper.getPasswordByEmail(userEmail);
            const match = await bcrypt.compare(userPassword, userPasswordEncrypted);

            if(match){
                return true;
            }
            else{
                return false;
            }
        }
        else{
            throw new Error("Usuário não encontrado");
        }
        
    }
}
