/**
 * Created by venkatesh on 3/8/2018.
 */
app.constant('baseUrl', 'https://lbmanager-node.herokuapp.com');
app.config(function($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider){

        /*$httpProvider.defaults.headers.common = {};
        $httpProvider.defaults.headers.post = {};
        $httpProvider.defaults.headers.put = {};
        $httpProvider.defaults.headers.patch = {};*/
    (function (ChartJsProvider) {
        ChartJsProvider.setOptions({ colors : [ '#803690', '#00ADF9', '#DCDCDC', '#46BFBD', '#FDB45C', '#949FB1', '#4D5360'] });
    });
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
            .state('dashboard.about', {
                url: '/about',
                templateUrl: 'app/views/about.html'
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
            })
            .state('dashboard.viewMember', {
                url: '/viewMember',
                templateUrl: 'app/views/viewMember.html',
                controller: 'viewMemberCtrl'
            })
            .state('dashboard.viewBook', {
                url: '/viewBook',
                templateUrl: 'app/views/viewBook.html',
                controller: 'viewBookCtrl'
            })
            .state('dashboard.issueBook', {
                url: '/issueBook',
                templateUrl: 'app/views/issueBook.html',
                controller: 'issueBookCtrl'
            })
            .state('dashboard.userProfile', {
                url: '/userProfile',
                templateUrl: 'app/views/userprofile.html',
                controller: 'userProfileCtrl'
            })
            .state('dashboard.createUser', {
                url: '/createUser',
                templateUrl: 'app/views/createUser.html',
                controller: 'createUserCtrl'
            })
            .state('dashboard.issuedBooks', {
                url: '/issuedBooks',
                templateUrl: 'app/views/issuedBooksLog.html',
                controller: 'issuedBooksCtrl'
            })
            .state('dashboard.returnBook', {
                url: '/returnBook',
                templateUrl: 'app/views/returnBook.html',
                controller: 'returnBookCtrl',
                params: { bookIssueId: null }
            })
            .state('dashboard.allUsers', {
            url: '/allUsers',
            templateUrl: 'app/views/allUsers.html',
            controller: 'allUsersCtrl'
            });



    /*.state('admin.createBookCtrlcreateBookCtrl', {
     url: '/offers',
     views: {
     '@admin': {viewMemberCtrl
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