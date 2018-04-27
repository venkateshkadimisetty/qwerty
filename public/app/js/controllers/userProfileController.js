/**
 * Created by venkatesh on 4/26/2018.
 */
app.controller('userProfileCtrl',['$scope','$state','$http','$cookieStore','userProfileFactory','appFactory',function($scope,$state,$http,$cookieStore,userProfileFactory,appFactory){
    $scope.member={};
    function init() {
            $scope.myPromise= userProfileFactory.userProfile().then(function(response) {
                if (response.status == 200) {
                    console.log(response);
                    appFactory.toast('Member created with ID:' + response.data.memberId, 'success');
                    $scope.member = {};
                    $scope.memberForm.$setPristine();
                }
                appFactory.toast('Invalid Member Data', 'danger');
            });
    }
    init();
    $scope.cancel=function () {
        $state.go('dashboard.jobs');
    }

}]);