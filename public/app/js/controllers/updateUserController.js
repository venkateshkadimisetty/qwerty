/**
 * Created by mahesh on 5/17/2018.
 */
app.controller('ModalInstanceUserCtrl',['$scope', '$uibModalInstance', 'editUser','userfactory','appFactory',function($scope, $uibModalInstance,editUser,userfactory,appFactory){
    $scope.user=editUser;
    $scope.editUserCall = function (isValid) {
        if (isValid) {
            $scope.myPromise = userfactory.updateUser($scope.user).then(function (response) {
                if (response.status == 200) {
                    console.log(response);
                    appFactory.toast('User updated successfully', 'success');
                    $uibModalInstance.close('closed');
                }
            });
        };
    }
    $scope.cancel = function () {
        $uibModalInstance.dismiss('cancel');
    };

    $scope.open = function($event) {
        $event.preventDefault();
        $event.stopPropagation();

        $scope.opened = true;
    };
}]);