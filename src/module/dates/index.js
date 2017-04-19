saleApp
  .component('dates', {
    templateUrl: 'src/module/dates/template/index.html',
    controller: function($scope, customer) {
      $scope.customer = customer;

      $scope.select = function(date) {
        customer.selectDate(date);
      };
    }
  });