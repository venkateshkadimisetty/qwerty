/**
 * Created by venkatesh on 3/19/2018.
 */
app.controller('createMemberCtrl',['$scope','$state','$http','$cookieStore','memberfactory','appFactory',function($scope,$state,$http,$cookieStore,memberfactory,appFactory){
    $scope.member={};
    $scope.createMember=function (isValid) {
        if(isValid){
            $scope.myPromise= memberfactory.createMember($scope.member).then(function(response) {
                if (response.status == 200) {
                    console.log(response);
                    appFactory.toast('Member created with ID:' + response.data.memberId, 'success');
                    $scope.member = {};
                    $scope.memberForm.$setPristine();
                }
                appFactory.toast('Invalid Member Data', 'danger');
            });
        }
    }

    $scope.cancel=function () {
        $state.go('dashboard.jobs');
    }
    $scope.today = function() {
        $scope.dt = new Date();
    };
    $scope.today();

    $scope.clear = function () {
        $scope.dt = null;
    };

    // Disable weekend selection
   /* $scope.disabled = function(date, mode) {
        return ( mode === 'day' && ( date.getDay() === 0 || date.getDay() === 6 ) );
    };*/

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