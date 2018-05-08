/**
 * Created by venkatesh on 4/26/2018.
 */
app.controller('viewBookCtrl',['$scope','$state','$cookieStore','memberfactory','appFactory','bookfactory',function($scope,$state,$cookieStore,memberfactory,appFactory,bookfactory) {
    $scope.bookdata=true;
    $scope.edit=true;
    $scope.fechBookobj1={};
    $scope.fetchBook=function (bookId) {
        $scope.myPromise= bookfactory.fetchBook(bookId).then(function(response) {
            $scope.bookavailable=false;
            $scope.bookdata=true;
            if(response.data==""){
                $scope.bookdata=true;
                $scope.bookavailable=true;
            }
            if(response.status== 200)
            {
                console.log(response);
                $scope.fechBookobj=response.data;
                $scope.bookdata=false;
            }
            else
            {
                $scope.bookdata=true;
                appFactory.toast("Invalid Book ID", "danger");
            }
        }, function (error) {
            appFactory.toast("Invalid Book ID", "danger");
            //alert("Fetching data failed!!!");
        });

    }
    $scope.updateBook = function (fechBookobj) {
        $scope.edit=true;
        $scope.myPromise= bookfactory.updateBook($scope.fechBookobj1).then(function(response) {
            if(response.status== 200)
            {
                console.log(response);
                appFactory.toast('Book updated successfully','success');
                $scope.fetchBook($scope.fechBookobj1.bookId);
            }
        });
    };
    $scope.back=function(fechBookobj){
        $scope.edit=true;
        $scope.fetchBook(bookId);
    }
    $scope.editBook=function (fechBookobj) {
        angular.copy($scope.fechBookobj,$scope.fechBookobj1);
        $scope.edit=false;

    }
    $scope.delete=function (fechBookobj) {
        if(confirm("Are you sure you want to delete this book?!")){
            $scope.myPromise= bookfactory.deleteBook(fechBookobj).then(function(response) {
                console.log(response);
                appFactory.toast('Book Deleted with ID:'+fechBookobj.bookId,'success');
                $state.go('dashboard.jobs');
            });
        }
    }
    $scope.cancel=function () {
        $state.go('dashboard.jobs');
    }

}]);
