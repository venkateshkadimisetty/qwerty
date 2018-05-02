/**
 * Created by venkatesh on 5/2/2018.
 */
app.controller('issuedBooksCtrl',['$scope','$state','$http','$cookieStore','bookfactory','appFactory','$timeout',function($scope,$state,$http,$cookieStore,bookfactory,appFactory,$timeout){
    $scope.issuedBooks=[];
    $scope.viewby = 10;
    $scope.totalItems = $scope.issuedBooks.length;
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
    function init() {
        $scope.myPromise=bookfactory.issuedBooks().then(function(response) {
            console.log(response);
            $scope.issuedBooks=response.data;
            $scope.totalItems = $scope.issuedBooks.length;
        });
    }
    init();
}]);


