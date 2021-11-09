const bcrypt = require('bcryptjs');
const userHelper = require('../helpers/UserHelper');

class LoginHelper {
    
    constructor(userEmail){
        this.userEmail = userEmail;
    }

    async isCorrectPassword(userPassword) {
        
        const userPasswordEncrypted = await userHelper.getPasswordByEmail(this.userEmail);
        
        const match = await bcrypt.compare(userPassword, userPasswordEncrypted);

        if(match){
            return true;
        }
        else{
            throw new Error("Senha incorreta");
        }                
    }
    
}

module.exports = LoginHelper;