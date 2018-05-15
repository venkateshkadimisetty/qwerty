/**
 * Created by mahesh on 03-02-2018.
 */
app.controller('DashboardCtrl',function($scope,$state,$http,$cookieStore){
   angular.element(document).ready(function () {
      $('#pageSubmenu').toggle();
      $('#pageSubmenu1').toggle();
      $('#sidebarCollapse').on('click', function () {
         $('#sidebar').toggleClass('active');
      });
      $('#bookHomelink').on('click', function () {
         $('#pageSubmenu').toggle();
      });
      $('#memberHomelink').on('click', function () {
         $('#pageSubmenu1').toggle();
      });
      $('#userHomeLink').on('click', function () {
         $('#userSubmenu').toggle();
      });
   });
   $scope.logout=function () {
      $cookieStore.remove('token');
      $cookieStore.remove('username');
      $cookieStore.remove('email');
      $cookieStore.remove('role');
      $state.go("login");
   }
   $scope.username=$cookieStore.get('username');
   $scope.userRole=$cookieStore.get('role');
});