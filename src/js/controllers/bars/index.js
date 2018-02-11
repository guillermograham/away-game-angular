angular
  .module('awayGameApp')
  .controller('BarsIndexCtrl', BarsIndexCtrl);

BarsIndexCtrl.$inject = ['Bar'];
function BarsIndexCtrl(Bar) {
  const vm = this;
  vm.all = Bar.query();
}
