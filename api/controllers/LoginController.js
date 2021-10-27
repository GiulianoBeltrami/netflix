const model = require('../../database/models');
const { Op } = require("sequelize");
const { user } = model;

module.exports = {

    async data(req,res){
        try {
            const email = req.body.email;
            const senha = req.body.senha;

            if (email && senha){
                res.status(200);
                return this.auth(email,senha);
                
            }
            else{
                //preencher todos
            }
        } catch (error) {
            console.log(error);
        }
    }
};


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