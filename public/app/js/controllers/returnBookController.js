/**
 * Created by venkatesh on 4/27/2018.
 */
app.controller('returnBookCtrl',['$scope','$state','$cookieStore','memberfactory','appFactory','bookfactory',function($scope,$state,$cookieStore,memberfactory,appFactory,bookfactory) {
    $scope.bookissuedata=true;
    $scope.fechIssueBookobj={};
    $scope.fetchIssueBook=function (bookIssueId) {
        $scope.myPromise= bookfactory.fetchIssueBook(bookIssueId).then(function(response) {
            if(response.status== 200)
            {
                console.log(response);
                $scope.fechIssueBookobj=response.data;
                $scope.bookissuedata=false;
            }
            else
            {
                $scope.bookissuedata=true;
                appFactory.toast("Invalid Book Issue ID", "danger");
            }
        }, function (error) {
            appFactory.toast("Invalid Member ID", "danger");
            //alert("Fetching data failed!!!");
        });

    }
    $scope.returnBook= function () {
        $scope.myPromise= bookfactory.returnIssueBook($scope.fechIssueBookobj).then(function(response) {
            if(response.status== 200)
            {
                console.log(response);
                appFactory.toast('BooK Reterned successfully','success');
            }
        });
    };
}]);
