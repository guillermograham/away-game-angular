const express = require('express');
const router  = express.Router();

const auth = require('../controllers/auth');
const bar = require('../controllers/bar');
const match = require('../controllers/match');


// Routes go here
router.route('/bars')
  .get(bar.index)
  .post(bar.create);

router.route('/bars/:id')
  .get(bar.show)
  .put(bar.update);

router.route('/bars/:id/reviews')
  .post(bar.createReview);

router.route('/bars/:id/reviews/:reviewId')
  .delete(bar.deleteReview);

router.route('/matches')
  .get(match.index);

router.route('/register')
  .post(auth.register);

router.route('/login')
  .post(auth.login);

module.exports = router;
