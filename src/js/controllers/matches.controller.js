angular
  .module('awayGameApp')
  .controller('MatchesIndexCtrl', MatchesIndexCtrl);

MatchesIndexCtrl.$inject = ['$http'];
function MatchesIndexCtrl($http) {

  $http
    .get('/api/matches')
    .then(res => {
      console.log(res.data);
    });

}
