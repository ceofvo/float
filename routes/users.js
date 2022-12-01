var express = require('express');
var router = express.Router();
const login = require('../controllers/login');

const { validateUserAccountLogin } = require('../middlewares/account');

/* GET users listing. */
router.post('/login', validateUserAccountLogin, login);

module.exports = router;
