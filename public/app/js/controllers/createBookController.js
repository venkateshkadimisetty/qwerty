/**
 * Created by venkatesh on 3/19/2018.
 */
app.controller('createBookCtrl',function($scope,$state,$http,bookfactory,appFactory){
    $scope.book={};
    $scope.createBook=function (isValid) {
        $scope.myPromise=bookfactory.createBook($scope.book).then(function(response) {
            console.log(response);
            appFactory.toast('Book created with ID:'+response.data.bookId,'success');
            $scope.book={};
            $scope.bookForm.$setPristine();
        });
    }

    $scope.cancel=function () {
        $state.go('dashboard.jobs');
    }
});