const modelDatabase = require('../../database/models');
const { user } = modelDatabase;

class UserHelper {

    async isUserRegistred(userEmail){
        // const userRegistred = await user.findOne({where: {email:userEmail} });
        // if (userRegistred){
        //     return true;
        // }
        // else{
        //     throw new Error("Usuário não encontrado");
        // }
        return await user.findOne({where: {email:userEmail} });
    }

    async getPasswordByEmail(userEmail){
        return await user.findOne({where: {email:userEmail}, attributes:['senha']})
            .then(user =>{ 
                return user.get('senha')
            });
    }
}

module.exports =new UserHelper();