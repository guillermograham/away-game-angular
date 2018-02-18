const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

const rp = require('request-promise');
const Bar = require('../models/bar');
const Match = require('../models/match');
// const User = require('../models/user');

function indexRoute(req, res) {
  rp({
    url: 'http://api.football-data.org/v1/competitions/445/fixtures',
    method: 'GET',
    json: true,
    headers: {
      'X-Auth-Token': process.env.FOOTBALL_DATA_API_KEY
    }
  })
    .then((response) => {
      console.log(response);
      res.json(response);
    })
    .catch((err) => {
      res.json(err);
    });
}


function createRoute(req, res, next) {

  Bar
    .findById(req.user.hasBar)
    .exec()
    .then((bar) => {

      console.log(bar);
      Match
        .findOne({ matchCode: req.params.matchCode })
        .exec()
        .then((match) => {
          if(!match) {
            console.log('*******NOT EXISTING ROUTE********');
            return Match
              .create({ matchCode: req.params.matchCode, date: req.body.date, teams: req.body.teams })
              .then((newMatch) => {
                console.log(newMatch);
                bar.fixtures.push(newMatch.id);
                return bar.save();
              });
          } else {
            console.log('***********RECOGNISED ROUTE***********');
            bar.fixtures.push(match.id);
            return bar.save();
          }
        });
    })
    .then(() => {
      res.json({ message: 'Match added'});
    })
    .catch(next);
}

module.exports = {
  index: indexRoute,
  create: createRoute
};


// Match
//   .findOne({ matchCode: req.params.matchCode })
//   .exec()
//   .then((match) => {
//     if(!match) {
//       console.log('*******NOT EXISTING ROUTE********');
//       const newMatch = Match.create({ matchCode: req.params.matchCode, date: req.body.date, teams: req.body.teams });
//       console.log(newMatch);
//       bar.fixtures.push(newMatch.id);
//       return bar.save();
//     } else {
//       console.log('***********RECOGNISED ROUTE***********');
//       bar.fixtures.push(match.id);
//       return bar.save();
//     }
//   });
