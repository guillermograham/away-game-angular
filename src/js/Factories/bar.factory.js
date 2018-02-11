angular
  .module('awayGameApp')
  .factory('Bar', Bar)
  .factory('BarReview', BarReview);

Bar.$inject = ['$resource'];
function Bar($resource) {
  return new $resource('/api/bars/:id', { id: '@id' }, {
    update: { method: 'PUT' },
    favorite: { method: 'POST', url: '/api/bars/:id/favorite' },
    unfavorite: { method: 'DELETE', url: '/api/bars/:id/unfavorite' }
  });
}

BarReview.$inject = ['$resource'];
function BarReview($resource) {
  return new $resource('/api/bars/:barId/comments/:id', { id: '@id' }, {
    update: { method: 'PUT' }
  });
}
