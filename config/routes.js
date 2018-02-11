const express = require('express');
const router  = express.Router();

const auth = require('../controllers/auth');
const match = require('../controllers/match');


// Routes go here
router.route('/matches')
  .get(match.index);

router.route('/register')
  .post(auth.register);

router.route('/login')
  .post(auth.login);

module.exports = router;
