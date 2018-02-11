angular
  .module('awayGameApp')
  .config(Router);

Router.$inject = ['$urlRouterProvider', '$stateProvider', '$locationProvider'];
function Router($urlRouterProvider, $stateProvider, $locationProvider) {
  $locationProvider.html5Mode(true);

  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: '/js/views/statics/home.html'
    })
    .state('matches', {
      url: '/matches',
      templateUrl: '/js/views/matches/index.html',
      controller: 'MatchesIndexCtrl as vm'
    });

  $urlRouterProvider.otherwise('/');
}
