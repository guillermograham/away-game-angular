angular
  .module('awayGameApp')
  .factory('User', User);

User.$inject = ['$resource'];
function User($resource) {
  return new $resource('/api/users/:id', { id: '@_id' });
}
