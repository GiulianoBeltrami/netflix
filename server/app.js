const express = require('express')
const app = express()
const port = 3000
const user = require('../database/models/user')

app.post('/netflix/auth', (req, res) => {
  var email  = req.body.email;
  var senha = req.body.senha; 

  if(email && senha){
      user
        .findOne({where:{email:email}})
        .then()
        .catch();
  }
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})