/**
 * Created by venkatesh on 4/19/2018.
 */
app.controller('viewMemberCtrl',['$scope','$state','$cookieStore','memberfactory','appFactory','bookfactory',function($scope,$state,$cookieStore,memberfactory,appFactory,bookfactory) {
    $scope.memberdata=true;
    $scope.edit=true;
    $scope.fechMemobj1={};
    $scope.fetchMember=function (memberId) {
        $scope.myPromise= memberfactory.fetchMember(memberId).then(function(response) {
          if(response.status== 200)
          {
            console.log(response);
            $scope.fechMemobj=response.data;
            $scope.memberdata=false;
          }
          else
          {
            $scope.memberdata=true;
            appFactory.toast("Invalid Member ID", "danger");
          }
        }, function (error) {
            appFactory.toast("Invalid Member ID", "danger");
            //alert("Fetching data failed!!!");
        });
        $scope.myPromise= bookfactory.fetchIssueBookofMember(memberId).then(function(response) {
            if(response.status== 200)
            {

                console.log(response);
                $scope.fechMemIssueBooks=response.data;
            }
            else
            {
                appFactory.toast("Invalid Member ID", "danger");
            }
        }, function (error) {
           // appFactory.toast("Invalid Member ID", "danger");
            //alert("Fetching data failed!!!");
        });
    }
    $scope.updateMember = function () {
      $scope.edit=true;
            $scope.myPromise= memberfactory.updateMember($scope.fechMemobj1).then(function(response) {
                if(response.status== 200)
                {
                    console.log(response);
                    appFactory.toast('Member updated successfully','success');
                    $scope.fetchMember($scope.fechMemobj1.memberId);
                }
            });
    };
    $scope.back=function(fechMemobj){
          $scope.edit=true;
        $scope.fetchMember(memberId);
    }
    $scope.editMember=function (fechMemobj) {
        angular.copy($scope.fechMemobj,$scope.fechMemobj1);
        $scope.fechMemobj1.dob=new Date($scope.fechMemobj1.dob);
        $scope.edit=false;

    }
    $scope.delete=function (fechMemobj) {
        if(confirm("Are you sure you want to delete member!"))
        {
            $scope.myPromise= memberfactory.deleteMember(fechMemobj).then(function(response) {
                console.log(response);
                appFactory.toast('Member Deleted with ID:'+fechMemobj.memberId,'success');
                $state.go('dashboard.jobs');
            });
        }
    }
    $scope.today = function() {
        $scope.dt = new Date();
    };
    $scope.today();

    $scope.clear = function () {
        $scope.dt = null;
    };
    $scope.returnBook=function (bookIssueId) {
       $state.go('dashboard.returnBook',{
           bookIssueId: bookIssueId
       })

    }

    // Disable weekend selection
    /* $scope.disabled = function(date, mode) {
     return ( mode === 'day' && ( date.getDay() === 0 || date.getDay() === 6 ) );
     };*/

    $scope.toggleMax = function() {
        $scope.maxDate =new Date();
    };
    $scope.toggleMax();

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
    $scope.cancel=function () {
        $state.go('dashboard.jobs');
    }

}]);
