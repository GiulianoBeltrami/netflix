const app = require('./express')();
const config = require('./config.json');

port = config['server'].port;

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
});