/**
 * Created by venkatesh on 4/12/2018.
 */
app.controller('issueBookCtrl',['$scope','$state','$cookieStore','memberfactory','appFactory','bookfactory',function($scope,$state,$cookieStore,memberfactory,appFactory,bookfactory) {
    $scope.issueBookobj={};
    $scope.fechMemobj={};
    $scope.fechBookobj={};
    $scope.issueobj={};
    $scope.booklimit=false;
    $scope.memberstatus=false;
    $scope.fetchMember=function (memberId) {
        $scope.myPromise= memberfactory.fetchMember(memberId).then(function(response) {
            console.log(response);
            $scope.bookid=false;
            $scope.booklimit=false;
            $scope.memberstatus=false;
            if(response.status==200){
                $scope.fechMemobj=response.data;
            }
            if(response.data==""){
                $scope.memberstatus=true;
                $scope.issueBookForm.$invalid=true;
            }
            if(response.data.fine>=100){
                $scope.booklimit=true;
                $scope.bookid=true;
                //alert('fine limit exceed');
                $scope.issueBookForm.$invalid=true;
            }
            if(response.data.bookLimit==0){
                $scope.booklimit=true;
                $scope.bookid=true;
                //alert('book limit exceed');
                $scope.issueBookForm.$invalid=true;
            }
        });
    }
    $scope.fetchBook=function (BookId) {
        $scope.myPromise= bookfactory.fetchBook(BookId).then(function(response) {
            console.log(response);
            $scope.bookstatus=false;
            $scope.bookdata=false;
            if(response.status==200){
                $scope.fechBookobj=response.data;
            }
            if(response.data.isAvailable==false){
                $scope.bookstatus=true;
                $scope.issueBookForm.$invalid=true;
            }
            if(response.status==400){
                $scope.bookstatus=true;
                $scope.issueBookForm.$invalid=true;
            }
            if(response.data==""){
                $scope.bookdata=true;
                $scope.issueBookForm.$invalid=true;
            }

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