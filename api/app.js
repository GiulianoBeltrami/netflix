const express = require('express');
const config = require('./config.json');
const serverPort = config['server'].port;
const loginRoutes = require('./routes/loginRoutes');
const registerRoutes = require('./routes/registerRoute');
const application = express();


application.use(express.json());
application.use(express.urlencoded({ extended: true}));
application.use('/api/login',loginRoutes);
application.use('/api/register',registerRoutes);
application.listen(serverPort, () => {
    console.log(`App listening at http://localhost:${serverPort}`)
});