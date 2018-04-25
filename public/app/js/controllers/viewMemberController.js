/**
 * Created by venkatesh on 4/19/2018.
 */
app.controller('viewMemberCtrl',['$scope','$state','$cookieStore','memberfactory','appFactory','bookfactory',function($scope,$state,$cookieStore,memberfactory,appFactory,bookfactory) {
    $scope.memberdata=true;
    $scope.edit=true;
    $scope.fetchMember=function (memberId) {
        $scope.myPromise= memberfactory.fetchMember(memberId).then(function(response) {
            console.log(response);
            $scope.fechMemobj=response.data;
            $scope.memberdata=false;
        });

    }
    $scope.updateMember = function (fechMemobj) {
      $scope.edit=true;
            $scope.myPromise= memberfactory.updateMember($scope.fechMemobj).then(function(response) {
                if(response.status== 200)
                {
                    console.log(response);
                    appFactory.toast('Member updated successfully','success');
                    $scope.fetchMember;
                }
            });
    };
    $scope.editMember=function (fechMemobj) {
        $scope.edit=false;

    }
    $scope.cancel=function () {
        $state.go('dashboard.jobs');
    }

}]);
