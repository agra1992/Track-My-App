angular.module('myapp').controller('ModalDemoCtrl', function ($scope, $uibModal, $log) {

  $scope.items = [
    {
      id: 1,
      title: 'All in once place',
      body: "You can view all your job applications in one place! You probably must've applied to tens of hundreds of jobs online. But, managing the progress with all of those applications, or maybe even trying to remember if you'd already applied to a job, is not an easy task. This online platform seeks to alleviate your pain and give you a single go-to arena for all your job applications."
    }, {
      id: 2,
      title: 'Less worries. More fun!',
      body: "With our easy to use services, you can rest assured that all your application progress is being tracked in one place. This means, you now have more time to pursue some of your passions and skills and leave your application tracking worries to us!"
    }, {
      id: 3,
      title: 'Safe and Secure',
      body: "Your account information is stored in a password-encrypted database on secure servers. Your information is safe with us!"
    }
  ];

  $scope.animationsEnabled = true;

  $scope.open = function (option) {

    var modalInstance = $uibModal.open({
      animation: $scope.animationsEnabled,
      templateUrl: 'portfolioModal',
      controller: 'ModalInstanceCtrl',
      option: option,
      resolve: {
        items: function () {
          return $scope.items;
        }
      }
    });

    console.log(modalInstance);

    modalInstance.result.then(function (selectedItem) {
      $scope.selected = selectedItem;
    }, function () {
      $log.info('Modal dismissed at: ' + new Date());
    });
  };

  $scope.toggleAnimation = function () {
    $scope.animationsEnabled = !$scope.animationsEnabled;
  };

});

// Please note that $uibModalInstance represents a modal window (instance) dependency.
// It is not the same as the $uibModal service used above.

angular.module('myapp').controller('ModalInstanceCtrl', function ($scope, $uibModalInstance, items) {
  $scope.items = items;
  $scope.selected = {
    item: $scope.items[0]
  };

  $scope.close = function () {
    $uibModalInstance.close($scope.selected.item);
  };

});
