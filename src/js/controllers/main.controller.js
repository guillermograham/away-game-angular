angular
  .module('awayGameApp')
  .controller('MainCtrl', MainCtrl);



MainCtrl.$inject = ['$http'];
function MainCtrl($http) {


  $http
    .get('/api/matches')
    .then(res => {
      console.log(res);
    });

}
