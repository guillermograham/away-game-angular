angular
  .module('awayGameApp')
  .controller('BarsNewCtrl', BarsNewCtrl);

BarsNewCtrl.$inject = ['Bar'];
function BarsNewCtrl(Bar) {
  const vm = this;
  vm.bar = {};
  vm.createBar = newBar;

  function newBar() {
    Bar
      .save(vm.bar)
      .$promise
      .then((res) => {
        console.log(res);
      });
  }
}
