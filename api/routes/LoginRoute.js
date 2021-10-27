const login = require('../controllers/LoginController');

module.exports = (app) => {
    app.get('/api/v1/login',login.data);
};