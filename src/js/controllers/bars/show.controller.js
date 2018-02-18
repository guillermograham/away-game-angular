angular
  .module('awayGameApp')
  .controller('BarShowCtrl', BarShowCtrl);

BarShowCtrl.$inject = ['$state', 'Bar', '$sce'];
function BarShowCtrl($state, Bar, $sce) {
  const vm = this;

  Bar
    .get($state.params)
    .$promise
    .then((bar) => {
      vm.bar = bar;
    });
}
