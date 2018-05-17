/**
 * Created by mahesh on 5/17/2018.
 */
app.controller('createUserCtrl',function($scope,$state,$http,userfactory,appFactory){
    $scope.createUser=function (isValid) {
        $scope.myPromise=userfactory.createUser($scope.user).then(function(response) {
            if (response.status == 200) {
                console.log(response);
                appFactory.toast('User created Sucessfully','success');
                $scope.user={};
                $scope.createUserForm.$setPristine();
            }
            else if (response.status == 400) {
                console.log(response);
                appFactory.toast('User Name Already Exist','danger');
                $scope.createUserForm.$setPristine();
            }
            else
            {
                appFactory.toast('Invalid User Data  ','danger');
            }
        });
    }

    $scope.cancel=function () {
        $state.go('dashboard.jobs');
    }
});