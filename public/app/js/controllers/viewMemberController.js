/**
 * Created by venkatesh on 4/19/2018.
 */
app.controller('viewMemberCtrl',['$scope','$state','$cookieStore','memberfactory','appFactory','bookfactory',function($scope,$state,$cookieStore,memberfactory,appFactory,bookfactory) {
    $scope.memberdata=true;
    $scope.fetchMember=function (memberId) {
        $scope.myPromise= memberfactory.fetchMember(memberId).then(function(response) {
            console.log(response);
            $scope.fechMemobj=response.data;
            $scope.memberdata=false;
        });

    }
    $scope.cancel=function () {
        $state.go('dashboard.jobs');
    }

}]);
