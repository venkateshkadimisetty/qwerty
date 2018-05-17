/**
 * Created by mahesh on 5/15/2018.
 */
app.controller('allUsersCtrl',['$scope','$state','$http','$cookieStore','userfactory','appFactory','$uibModal',function($scope,$state,$http,$cookieStore,userfactory,appFactory,$uibModal){
    $scope.totalUsers=[];
    $scope.viewby = 10;
    $scope.totalItems = $scope.totalUsers.length;
    $scope.currentPage = 2;
    $scope.itemsPerPage = $scope.viewby;
    $scope.maxSize = 5; //Number of pager buttons to show

    $scope.setPage = function (pageNo) {
        $scope.currentPage = pageNo;
    };

    $scope.pageChanged = function() {
        console.log('Page changed to: ' + $scope.currentPage);
    };

    $scope.setItemsPerPage = function(num) {
        $scope.itemsPerPage = num;
        $scope.currentPage = 1; //reset to first page
    }
    $scope.editUser=function (user) {
        var copiedUser={};
        angular.copy(user,copiedUser);
        $scope.message = "Show Form Button Clicked";
        console.log($scope.message);

        var modalInstance = $uibModal.open({
            templateUrl: 'app/views/editUser.html',
            controller: 'ModalInstanceUserCtrl',
            resolve: {
                editUser:copiedUser
            }
        });
        modalInstance.result.then(function () {
            init();
        }, function () {
        });
    }
    $scope.delete=function (user) {
            $scope.myPromise= userfactory.deleteUser(user).then(function(response) {
                console.log(response);
                appFactory.toast(user.username +' is Deleted ','success');
                $state.reload();
            });
    }
    function init() {
        $scope.myPromise=userfactory.allUsers().then(function(response) {
            console.log(response);
            $scope.totalUsers=response.data;
            $scope.totalItems = $scope.totalUsers.length;
        });
    }
    init();
    $scope.sort = {
        active: '',
        descending: undefined
    }

    $scope.sort_by = function(column) {
        var sort = $scope.sort;
        if (sort.active == column) {
            sort.descending = !sort.descending;
        } else {
            sort.active = column;
            sort.descending = false;
        }
    };

    $scope.getIcon = function(column) {
        var sort = $scope.sort;
        if (sort.active == column) {
            return sort.descending
                ? 'glyphicon-chevron-up'
                : 'glyphicon-chevron-down';
        }
        return 'glyphicon-sort';
    }
}]);

