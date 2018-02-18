angular
  .module('awayGameApp')
  .factory('Match', Match);

Match.$inject = ['$resource'];
function Match($resource){
  return $resource('/api/matches/:matchCode', { matchCode: '@matchCode'}, {
    'join': { method: 'POST', url: '/api/matches/:matchCode/screen' }
  });
}
