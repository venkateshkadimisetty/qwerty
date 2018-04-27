/**
 * Created by venkatesh on 3/21/2018.
 */
app.controller('allMembersCtrl',['$scope','$state','$http','$cookieStore','memberfactory','appFactory','$uibModal','Excel','$timeout',function($scope,$state,$http,$cookieStore,memberfactory,appFactory,$uibModal,Excel,$timeout){
    //app.controller('allMembersCtrl',['$scope','$state','memberfactory','appFactory','$uibModal',function($scope,$state,memberfactory,appFactory,$uibModal){
    $scope.totalMembers=[];
    $scope.viewby = 10;
    $scope.totalItems = $scope.totalMembers.length;
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
    $scope.editMember=function (member) {
        var copiedMember={};
        angular.copy(member,copiedMember);
        $scope.message = "Show Form Button Clicked";
        console.log($scope.message);

        var modalInstance = $uibModal.open({
            templateUrl: 'app/views/editMember.html',
            controller: 'ModalInstanceCtrl',
            resolve: {
                editingMember:copiedMember
            }
        });

        modalInstance.result.then(function (selectedItem) {
        }, function () {
        });
    }
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
    $scope.delete=function (member) {
        if(confirm("Are you sure you want to delete member!"))
        {
            $scope.myPromise= memberfactory.deleteMember(member).then(function(response) {
                console.log(response);
                appFactory.toast('Member Deleted with ID:'+member.memberId,'success');
                //$state.reload();
                init();
            });
        }
    }
    $scope.exportToExcel=function(tableId){ // ex: '#my-table'
        var exportHref=Excel.tableToExcel(tableId,'sheet name');
        $timeout(function(){location.href=exportHref;},100); // trigger download
    }
    function init() {
        $scope.myPromise=memberfactory.getAllMembers().then(function(response) {
            console.log(response);
            $scope.totalMembers=response.data;
            $scope.totalItems = $scope.totalMembers.length;
        });
    }
    init();
}]);


