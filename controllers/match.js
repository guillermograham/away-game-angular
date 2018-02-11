const rp = require('request-promise');

function indexRoute(req, res) {
  rp({
    url: 'http://api.football-data.org/v1/competitions/445/fixtures',
    method: 'GET',
    json: true
  })
    .then((response) => {
      res.json(response);
    })
    .catch((err) => {
      res.json(err);
    });
}

module.exports = {
  index: indexRoute
};
