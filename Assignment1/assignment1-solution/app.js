(function(){
'use strict';

angular.module('messageApp', [])
.controller('messageController', messageController);

messageController.$inject = ['$scope'];

function messageController($scope) {
  $scope.message = "";
  $scope.numOfItems = 0;
  $scope.text = "";
  $scope.color = "";

  $scope.calcNumItems = function() {
    var count = 0;
    let msg = $scope.message;
    for(var i = 0;i<msg.length;i++) {
      if(msg[i]==',') count +=1;
    }
    $scope.numOfItems = count;
  }

  $scope.checkTooMuch = function() {
    //empty item not count;
    let msg = $scope.message;
    let count = $scope.numOfItems;
    if(msg=="") {
      $scope.text = "Please enter data first!!!";
      $scope.color = "red";
    } else if(count<=2) {
      $scope.text = "Enjoy!";
      $scope.color = "green";
    }else {
      $scope.text = "Too much!"
      $scope.color = "green";
    }
  }
}

})();
