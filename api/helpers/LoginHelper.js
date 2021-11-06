class LoginHelper {

    async checkUser(username, password) {
        //... fetch user from a db etc.
    
        const match = await bcrypt.compare(password, user.passwordHash);
    
        if(match) {
            //login
        }
    
        //...
    }
    
}

module.exports =new LoginHelper();