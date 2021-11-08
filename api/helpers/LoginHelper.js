class LoginHelper {

    async isCorrectPassword(username, password) {
        
        const match = await bcrypt.compare(password, user.passwordHash);
    
        if(match) {
            //login
        }
    
        //...
    }
    
}

module.exports =new LoginHelper();