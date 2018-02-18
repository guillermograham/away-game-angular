angular
  .module('awayGameApp')
  .controller('LoginCtrl', LoginCtrl);

LoginCtrl.$inject = ['$auth', '$state'];
function LoginCtrl($auth, $state) {
  const vm = this;
  vm.credentials = {};
  vm.submit = submit;

  function submit() {
    $auth.login(vm.credentials)
      .then(() => $state.go('home'));
  }
}
