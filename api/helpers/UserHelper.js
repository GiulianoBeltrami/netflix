class UserHelper {

    static async isUserRegistred(databaseModel,userEmail){

        const userRegistred = await databaseModel.findOne({where: {email:userEmail} });
        if (userRegistred){
            return true;
        }
        else{
            return false;
        }

    }
}

module.exports =new UserHelper();