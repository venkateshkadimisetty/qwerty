/**
 * Created by venkatesh on 4/8/2018.
 */
app.controller('ModalInstanceCtrl',['$scope', '$uibModalInstance', 'editingMember','memberfactory','appFactory',function($scope, $uibModalInstance,editingMember,memberfactory,appFactory){
    $scope.member=editingMember;
    $scope.member.dob=new Date($scope.member.dob);
    $scope.editMemberCall = function (isValid) {
        if(isValid){
            $scope.myPromise= memberfactory.updateMember($scope.member).then(function(response) {
                if(response.status== 200)
                {
                    console.log(response);
                    appFactory.toast('Member updated successfully','success');
                    $uibModalInstance.close('closed');
                }
            });
        }

    };
    $scope.cancel = function () {
        $uibModalInstance.dismiss('cancel');
    };
    $scope.today = function() {
        $scope.dt = new Date();
    };
    $scope.today();

    $scope.clear = function () {
        $scope.dt = null;
    };

    $scope.toggleMax = function() {
        $scope.maxDate =new Date();
    };
    $scope.toggleMax();

    $scope.open = function($event) {
        $event.preventDefault();
        $event.stopPropagation();

        $scope.opened = true;
    };

    $scope.dateOptions = {
        formatYear: 'yy',
        startingDay: 1
    };

    $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
    $scope.format = $scope.formats[0];
}]);
