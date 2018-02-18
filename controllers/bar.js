const Bar = require('../models/bar');
const User = require('../models/user');

function indexRoute(req, res, next) {
  Bar
    .find()
    .exec()
    .then((bars) => res.json(bars))
    .catch(next);
}

function createRoute(req, res, next) {
  req.body.createdBy = req.user;

  Bar
    .create(req.body)
    .then((bar) => {

      User
        .findById(req.user._id)
        .exec()
        .then(user => {
          user.hasBar = bar;
          user.save();
        })
        .then(() => res.status(201).json(bar));
    })
    .catch(next);
}

function showRoute(req, res, next) {
  Bar
    .findById(req.params.id)
    .populate('fixtures')
    .exec()
    .then((bar) => {
      if(!bar) return res.notFound();

      res.json(bar);
    })
    .catch(next);
}

function updateRoute(req, res, next) {
  Bar
    .findById(req.params.id)
    .exec()
    .then((bar) => {
      if(!bar) return res.notFound();

      Object.assign(bar, req.body);
      return bar.save();
    })
    .then((bar) => res.json(bar))
    .catch(next);
}

function createReviewRoute(req, res, next) {

  req.body.createdBy = req.user;

  Bar
    .findById(req.params.id)
    .exec()
    .then((bar) => {
      if(!bar) return res.notFound();

      const review = bar.reviews.create(req.body);
      bar.reviews.push(review);

      return bar.save()
        .then(() => res.json(review));
    })
    .catch(next);
}

function deleteReviewRoute(req, res, next) {
  Bar
    .findById(req.params.id)
    .exec()
    .then((bar) => {
      if(!bar) return res.notFound();

      const review = bar.reviews.id(req.params.reviewId);
      review.remove();

      return bar.save();
    })
    .then(() => res.status(204).end())
    .catch(next);
}

module.exports = {
  index: indexRoute,
  create: createRoute,
  show: showRoute,
  update: updateRoute,
  createReview: createReviewRoute,
  deleteReview: deleteReviewRoute
};
