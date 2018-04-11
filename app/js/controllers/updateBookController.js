/**
 * Created by venkatesh on 4/8/2018.
 */
app.controller('ModalInstanceBookCtrl',['$scope', '$uibModalInstance', 'editBook','bookfactory','appFactory',function($scope, $uibModalInstance,editBook,bookfactory,appFactory){
    $scope.book=editBook;
    $scope.editBookCall = function (isValid) {
        if (isValid) {
            $scope.myPromise = bookfactory.updateBook($scope.book).then(function (response) {
                if (response.status == 200) {
                    console.log(response);
                    appFactory.toast('Book updated successfully', 'success');
                    $uibModalInstance.close('closed');
                }
            });
        };
    }
    $scope.cancel = function () {
        $uibModalInstance.dismiss('cancel');
    };

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