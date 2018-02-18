angular
  .module('awayGameApp')
  .controller('MainCtrl', MainCtrl);



MainCtrl.$inject = ['$auth', '$state'];
function MainCtrl($auth, $state) {

  const vm = this;

  vm.isAuthenticated = $auth.isAuthenticated;

  function logout() {
    $auth.logout();
    $state.go('home');
  }

  vm.logout = logout;


}
