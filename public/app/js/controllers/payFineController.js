/**
 * Created by venkatesh on 5/1/2018.
 */
/**
 * Created by venkatesh on 4/8/2018.
 */
app.controller('PayFineCtrl',['$scope', '$uibModalInstance', 'editingMember','memberfactory','appFactory',function($scope, $uibModalInstance,editingMember,memberfactory,appFactory){
    $scope.member=editingMember;
    $scope.payingFine=0;
    $scope.payFine = function (isValid) {
        if(isValid){
            var obj={'memberId':$scope.member.memberId,'fine':$scope.payingFine};
            $scope.myPromise= memberfactory.payFine(obj).then(function(response) {
                if(response.status== 200)
                {
                    console.log(response);
                    appFactory.toast('Fine payed successfully','success');
                    $uibModalInstance.close('closed');
                }
            });
        }

    };
    $scope.cancel = function () {
        $uibModalInstance.dismiss('cancel');
    };
}]);
