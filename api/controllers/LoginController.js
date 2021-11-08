const modelDatabase = require('../../database/models');
const bcrypt = require('bcryptjs');
const userHelper = require('../helpers/UserHelper');

module.exports = {


    async authenticateLogin(userEmail,userPassword){

        const isUserRegistred = await userHelper.isUserRegistred(userEmail);
        
        if(isUserRegistred){
            const userPasswordEncrypted = await userHelper.getPasswordByEmail(userEmail);
            const match = await bcrypt.compare(userPassword, userPasswordEncrypted);

            if(match){
                return true;
            }
            else{
                throw new Error("Senha incorreta");
            }
        }
        else{
            throw new Error("Usuário não encontrado");
        }

    }
}
