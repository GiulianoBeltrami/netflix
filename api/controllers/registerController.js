require('dotenv').config()
const modelDatabase = require('../../database/models');
const { user } = modelDatabase;
const bcrypt = require('bcryptjs');
const userHelper = require('../helpers/UserHelper');


module.exports = {

    async registerUser(userEmail,userPassword){
        
        const userRegistred = await userHelper.isUserRegistred(user,userEmail)
        
        if (userRegistred){
            throw new Error('Usuário já registrado')
        }
        else{
            const userEmailLower = userEmail.toLowerCase();

            // Usar assíncrono pois bcrypt é CPU intensive, oque pode travar o event loop
            const encryptedPassword = await bcrypt.hash(userPassword,10);
            const newUser = await user.create({
                email:userEmailLower,
                senha:encryptedPassword
            });
            return newUser;
        }

    },

    
    async isUserRegistred(userEmail){
        const userRegistred = await user.findOne({where: {email:userEmail} });
        if (userRegistred){
            return true;
        }
        else{
            return false;
        }
    },

}
