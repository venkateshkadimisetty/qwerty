/**
 * Created by venkatesh on 4/26/2018.
 */
app.controller('userProfileCtrl',['$scope','$state','$http','$cookieStore','userfactory','appFactory',function($scope,$state,$http,$cookieStore,userfactory,appFactory){
    $scope.edit=true;
    $scope.userData1={};
    $scope.editProfile=function (userData) {
        angular.copy($scope.userData,$scope.userData1);
        $scope.edit=false;

    }
    $scope.updateProfile=function (userData) {
        $scope.edit=true;
        $scope.myPromise= userfactory.updateProfle($scope.userData1).then(function(response) {
            if(response.status== 200)
            {
                console.log(response);
                appFactory.toast('User updated successfully','success');
                init();
            }
        });
    }
    $scope.back=function(userData){
        $scope.edit=true;
        init();
    }
    function init() {
            $scope.myPromise= userfactory.userProfile().then(function(response) {
                if (response.status == 200) {
                    console.log(response);
                    $scope.userData =response.data;
                }
                else{
                    appFactory.toast('Invalid User Data', 'danger');
                }
            });
    }
    init();
    $scope.cancel=function () {
        $state.go('dashboard.jobs');
    }

}]);