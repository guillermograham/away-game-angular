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
    .state('barsIndex', {
      url: '/bars',
      templateUrl: '/js/views/bars/index.html',
      controller: 'BarsIndexCtrl as vm'
    })
    .state('barsNew', {
      url: '/bars/new',
      templateUrl: '/js/views/bars/new.html',
      controller: 'BarsNewCtrl as vm'
    })
    .state('barShow', {
      url: '/bars/:id',
      templateUrl: '/js/views/bars/show.html',
      controller: 'BarShowCtrl as vm'
    })
    .state('matches', {
      url: '/matches',
      templateUrl: '/js/views/matches/index.html',
      controller: 'MatchesIndexCtrl as vm'
    })
    .state('login', {
      url: '/login',
      templateUrl: '/js/views/auth/login.html',
      controller: 'LoginCtrl as vm'
    })
    .state('register', {
      url: '/register',
      templateUrl: '/js/views/auth/register.html',
      controller: 'RegisterCtrl as vm'
    });

  $urlRouterProvider.otherwise('/');
}
