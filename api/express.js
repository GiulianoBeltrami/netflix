
const express = require('express');

//Configurações do express
module.exports = () => {
  const app = express();

  app.use(express.json());
  app.use(express.urlencoded({ extended: true}));

  require('./routes/LoginRoute')(app);

  return app;
}