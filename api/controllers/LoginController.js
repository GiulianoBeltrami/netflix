//Controller -> responsável pela intermediação da interação entre o usuário e o modelo
const modelDatabase = require('../../database/models');
const { Op }  = require("sequelize");
const { user } = modelDatabase;

module.exports = {
    async authenticateLogin(email,senha){
        //procurar
        const userId = await user.findOne({where:{
            [Op.and]:[{email:email}, {senha:senha}]
        }});   
        return userId;
    }
}





    // async auth(req, res) {
    //     try {

    //         const email = await user.findOne({ where: { email: "admin@admin.com" } });
    //         if (email) {
    //             res.status(200).send({
    //                 message: email,
    //             });
    //         }
    //     }
    //     catch (error) {
    //         console.log(error);
    //     }
    // }