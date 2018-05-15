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
    function init() {
        $scope.myPromise=userfactory.allUsers().then(function(response) {
            console.log(response);
            $scope.totalUsers=response.data;
            $scope.totalItems = $scope.totalUsers.length;
        });
    }
    init();
    /*$scope.sort_by=function (type) {
     $scope.filterType=type;
     }*/
    /*$scope.editBook=function (book) {
        var copiedBook={};
        angular.copy(book,copiedBook);
        $scope.message = "Show Form Button Clicked";
        console.log($scope.message);

        var modalInstance = $uibModal.open({
            templateUrl: 'app/views/editBook.html',
            controller: 'ModalInstanceBookCtrl',
            resolve: {
                editBook:copiedBook
            }
        });
        modalInstance.result.then(function () {
            init();
        }, function () {
        });
    }*/
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


   /* $scope.delete=function (book) {
        if(book.isAvailable==false){
            appFactory.toast('Please Collect Book to Delete','danger');
        }
        else if(confirm("Are you sure you want to delete this book?!")){
            $scope.myPromise= bookfactory.deleteBook(book).then(function(response) {
                console.log(response);
                appFactory.toast('Book Deleted with ID:'+book.bookId,'success');
                $state.reload();
            });
        }
    }*/
}]);

