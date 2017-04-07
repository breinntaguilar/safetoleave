angular.module('testApp', [])
  .controller('testController', function($scope) {
    $scope.safeToGo = false;
    $scope.timeDiff = 0;
    //$scope.timeNow = null;
    //test modification
    $scope.timeOut = null;
    $scope.$watch("myTime", function(){
      if ($scope.myTime){
        var temp = new Date();
        $scope.timeOut = new Date($scope.myTime.getTime()+9.5*3600*1000);
        $scope.timeOut.setDate(temp.getDate());
        $scope.timeOut.setFullYear(temp.getFullYear());
        $scope.timeOut.setMonth(temp.getMonth());
          console.log($scope.timeOut);
          $scope.safeToGo = new Date() > $scope.timeOut;
        
        $scope.timeDiff = (($scope.timeOut.getTime() - Date.now()) / 1000 / 3600).toFixed(1) ;
      }
    });
  });
