/**
 * Created by venkatesh on 4/12/2018.
 */
app.controller('issueBookCtrl',['$scope','$state','$cookieStore','memberfactory','appFactory','bookfactory',function($scope,$state,$cookieStore,memberfactory,appFactory,bookfactory) {
    $scope.issueBookobj={};
    $scope.fechMemobj={};
    $scope.fechBookobj={};
    $scope.issueobj={};
    $scope.booklimit=false;
    $scope.fetchMember=function (memberId) {
        $scope.myPromise= memberfactory.fetchMember(memberId).then(function(response) {
            console.log(response);
            $scope.bookid=false;
            $scope.booklimit=false;
            if(response.data.fine>=100){
                $scope.booklimit=true;
                $scope.bookid=true;
                //alert('fine limit exceed');
            }
            if(response.data.bookLimit==0){
                $scope.booklimit=true;
                $scope.bookid=true;
                //alert('book limit exceed');
            }
            $scope.fechMemobj=response.data;

        });

    }
    $scope.fetchBook=function (BookId) {
        $scope.myPromise= bookfactory.fetchBook(BookId).then(function(response) {
            console.log(response);
            $scope.fechBookobj=response.data;
        });

    }
    $scope.issueBook=function (isValid) {
        if(isValid){
            $scope.issueobj.username=$cookieStore.get('username');
            $scope.issueobj.memberId=$scope.issueBookobj.memberId;
            $scope.issueobj.bookId=$scope.issueBookobj.bookId;
            $scope.myPromise= bookfactory.issueBook($scope.issueobj).then(function(response) {
                console.log(response);
                appFactory.toast('Book Issued sucessfully', 'success');
                $state.go('dashboard.jobs');
            });
        }
    }
    $scope.cancel=function () {
        $state.go('dashboard.jobs');
    }
    function init() {
        $scope.issueBookobj.issueDate=new Date();
        $scope.issueBookobj.returnDate=new Date();
        $scope.issueBookobj.returnDate.setDate($scope.issueBookobj.returnDate.getDate() + 15);
    }
   init();
}]);