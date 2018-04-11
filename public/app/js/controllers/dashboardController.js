/**
 * Created by mahesh on 03-02-2018.
 */
app.controller('DashboardCtrl',function($scope,$state,$http){
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
   });
});
