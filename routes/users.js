var express = require('express');
var router = express.Router();
var account = require('../controllers/account');

var {
  validateUserAccountCreation
} = require('../middlewares/account');

/* GET users listing. */
router.get('/create', validateUserAccountCreation, account.register);

module.exports = router;
