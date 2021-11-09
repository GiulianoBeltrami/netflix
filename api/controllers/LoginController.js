const modelDatabase = require('../../database/models');
const bcrypt = require('bcryptjs');
const userHelper = require('../helpers/UserHelper');
const LoginHelper = require('../helpers/LoginHelper');



module.exports = {

    async authenticateLogin(userEmail,userPassword){
        return await userHelper.isUserRegistred(userEmail)
            .then(async () => {
                const loginHelper = new LoginHelper(userEmail);
                return await loginHelper.isCorrectPassword(userPassword);
            })
            .catch(error => {
                throw error;
            });
    }
}
