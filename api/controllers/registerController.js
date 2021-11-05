require('dotenv').config()
const modelDatabase = require('../../database/models');
const { user } = modelDatabase;
const userHelper = require('../helpers/UserHelper');
const registerHelper = require('../helpers/RegisterHelper');


module.exports = {

    async registerUser(userEmail,userPassword){
        
        const isUserRegistred = await userHelper.isUserRegistred(userEmail);
        
        if (isUserRegistred){
            throw new Error('Usuário já registrado');
        }
        else{            
            const newUser = await user.create({
                email: userEmail.toLowerCase(),
                senha: registerHelper.encryptPassword(userPassword)
            });
            return newUser;
        }

    },

}
