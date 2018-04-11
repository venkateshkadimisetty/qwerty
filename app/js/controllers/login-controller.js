app.controller('LoginCtrl',['$scope','$state','$http','$cookieStore','appFactory',function($scope,$state,$http,$cookieStore,appFactory) {
    $scope.username="";
    $scope.password="";
    $scope.isLogin=true;

    $scope.forgot=function () {
        $scope.isLogin=false;
    }

   function isFormValid(){
       if($scope.username==null || $scope.username==undefined || $scope.username==''){
            return false;
       }
       if($scope.password==null || $scope.password==undefined || $scope.password==''){
           return false;
       }

       return true;
   }
    $scope.login=function () {
        var data = {
            "username": $scope.username,
            "password": $scope.password
        };
        $scope.myPromise = $http.post('https://lbmanager-node.herokuapp.com/user/login', data).then(function (response) {
            console.log(response);
            appFactory.toast('login sucessfully', 'success');
            $cookieStore.put('token', response.data.token);
            $state.go("dashboard.jobs");
        }, function (error) {
            appFactory.toast("Invalid Username/Password", "danger");
            //alert("Fetching data failed!!!");
        });
    }

}]);