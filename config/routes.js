const express = require('express');
const router  = express.Router();

const auth = require('../controllers/auth');
const bar = require('../controllers/bar');
const match = require('../controllers/match');
const user = require('../controllers/user');
const secureRoute = require('../lib/secureRoute');


// Routes go here
router.route('/bars')
  .get(bar.index)
  .post(secureRoute, bar.create);

router.route('/bars/:id')
  .get(bar.show)
  .put(bar.update);

router.route('/bars/:id/reviews')
  .post(bar.createReview);

router.route('/bars/:id/reviews/:reviewId')
  .delete(bar.deleteReview);

router.route('/matches')
  .get(secureRoute, match.index);

router.route('/matches/:matchCode/screen')
  .post(secureRoute, match.create);

router.route('/users')
  .get(user.index);

router.route('/users/:id')
  .get(user.show);

router.route('/register')
  .post(auth.register);

router.route('/login')
  .post(auth.login);

module.exports = router;
