angular
  .module('awayGameApp')
  .controller('MatchesIndexCtrl', MatchesIndexCtrl);

MatchesIndexCtrl.$inject = ['$http'];
function MatchesIndexCtrl($http) {

  const vm = this;

  $http
    .get('/api/matches')
    .then(res => {
      console.log(res.data.fixtures);
      vm.all = res.data.fixtures;
    });

}
