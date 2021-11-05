const bcrypt = require('bcryptjs');

class RegisterHelper {

    // Usar assíncrono pois bcrypt é CPU intensive, oque pode travar o event loop
    async encryptPassword(password){
        const encryptedPassword = await bcrypt.hash(password,10);
        return encryptedPassword;
    }

}

module.exports =new RegisterHelper();