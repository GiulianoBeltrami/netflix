const express = require('express');
const config = require('./config.json');
const serverPort = config['server'].port;
const loginRouter = require('./routes/loginRoutes');

const application = express();
application.use(express.json());
application.use(express.urlencoded({ extended: true}));

application.use('/api/login',loginRouter);


application.listen(serverPort, () => {
    console.log(`App listening at http://localhost:${serverPort}`)
});