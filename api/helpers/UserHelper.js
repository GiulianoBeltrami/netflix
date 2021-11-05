const modelDatabase = require('../../database/models');
const { user } = modelDatabase;

class UserHelper {

    async isUserRegistred(userEmail){

        const userRegistred = await user.findOne({where: {email:userEmail} });

        if (userRegistred){
            return true;
        }
        else{
            return false;
        }

    }
}

module.exports =new UserHelper();