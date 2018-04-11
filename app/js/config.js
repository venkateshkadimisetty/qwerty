/**
 * Created by venkatesh on 3/8/2018.
 */
app.config(function($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider){

    $urlRouterProvider.otherwise('/login'),

        $stateProvider
            .state('login', {
                url: '/login',
                templateUrl: 'app/views/login.html',
                controller: 'LoginCtrl'
            })
            .state('dashboard', {
                abstract: true,
                url: '/dashboard',
                templateUrl: 'app/views/admin-dashboard.html',
                controller: 'DashboardCtrl'
            })
            .state('dashboard.jobs', {
                url: '/jobs',
                templateUrl: 'app/views/home.html'
            })
            .state('dashboard.createBook', {
                url: '/createBook',
                templateUrl: 'app/views/createBook.html',
                controller: 'createBookCtrl'
            })
            .state('dashboard.createMember', {
            url: '/createMember',
            templateUrl: 'app/views/createMember.html',
            controller: 'createMemberCtrl'
            })
            .state('dashboard.allBooks', {
                url: '/allBooks',
                templateUrl: 'app/views/allBooks.html',
                controller: 'allBooksCtrl'
            })
            .state('dashboard.allMember', {
                url: '/allMember',
                templateUrl: 'app/views/allMembers.html',
                controller: 'allMembersCtrl'
            })
            .state('dashboard.charts', {
                url: '/charts',
                templateUrl: 'app/views/charts.html',
                controller: 'chartsCtrl'
            });



    /*.state('admin.createBookCtrlcreateBookCtrl', {
     url: '/offers',
     views: {
     '@admin': {
     templateUrl: 'views/offers.html',
     controller: 'allBooksCtrl'
     }
     }
     })
     .state('admin.foodMenu', {
     url: '/foodMenu',
     views: {
     '@admin': {
     templateUrl: 'views/food-menu.html',
     controller: 'FoodMenuCtrl'
     }
     }
     })
     .state('admin.editFoodMenu', {
     url: '/editFood',
     views: {
     '@admin': {
     templateUrl: 'views/edit-food.html',
     controller: 'EditFoodMenuCtrl'
     }
     }
     })
     .state('admin.updateBanners', {
     url: '/updateBanners',
     views: {
     '@admin': {
     templateUrl: 'views/dashboard-images.html',
     controller: 'UpdateBannersCtrl'
     }
     }
     })
     .state('admin.escalationDetails', {
     url: '/escalation',
     views: {
     '@admin': {
     templateUrl: 'views/escalation-details.html',
     controller: 'EscalationDetailsCtrl'
     }
     }
     })
     .state('admin.changePassword', {
     url: '/changePassword',
     views: {
     '@admin': {
     templateUrl: 'views/change-password.html',
     controller: 'PasswordCtrl'
     }
     }
     })*/

});