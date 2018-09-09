/**
 * Created by venkatesh on 3/8/2018.
 */
app.constant('baseUrl', 'https://lbmanager-node.herokuapp.com');
app.config(function($stateProvider,$ocLazyLoadProvider, $urlRouterProvider, $locationProvider, $httpProvider){

    (function (ChartJsProvider) {
        ChartJsProvider.setOptions({ colors : [ '#803690', '#00ADF9', '#DCDCDC', '#46BFBD', '#FDB45C', '#949FB1', '#4D5360'] });
    });
    $urlRouterProvider.otherwise('/login'),

        $stateProvider
            .state('login', {
                url: '/login',
                templateUrl: 'app/views/login.html',
                controller: 'LoginCtrl',
                resolve: {
                    loadMyFiles:function($ocLazyLoad) {
                        return $ocLazyLoad.load({
                            name:'myApp',
                            files:[
                                'app/js/controllers/login-controller.js'
                            ]
                        })
                    }
                }
            })
            .state('dashboard', {
                abstract: true,
                url: '/dashboard',
                templateUrl: 'app/views/admin-dashboard.html',
                controller: 'DashboardCtrl',
                /*resolve: {
                    loadMyDirectives:function($ocLazyLoad){
                        return $ocLazyLoad.load(
                            {
                                name:'myApp',
                                files:[
                                    'app/js/controllers/dashboardController.js',
                                    'app/js/filters/customFilter.js',
                                    'app/js/factories/excel-factory.js',
                                    'app/js/factories/bookFactory.js',
                                    'app/js/factories/memberFactory.js',
                                    'app/js/factories/userProfileFactory.js'
                                ]
                            }),
                        $ocLazyLoad.load(
                                {
                                    name:'ngAnimate',
                                    files:['https://code.angularjs.org/1.4.0-rc.0/angular-animate.js']
                                }),
                        $ocLazyLoad.load(
                            {
                                name:'ngCookies',
                                files:['//ajax.googleapis.com/ajax/libs/angularjs/1.4.3/angular-cookies.js']
                            }),
                        $ocLazyLoad.load(
                            {
                                name:'ngSanitize',
                                files:['https://code.angularjs.org/1.4.0-rc.0/angular-sanitize.js']
                            })
                    }
                }*/
                resolve: {
                    loadMyFiles:function($ocLazyLoad) {
                        return $ocLazyLoad.load({
                            name:'myApp',
                            files:[
                                'app/js/controllers/dashboardController.js',
                                'app/js/filters/customFilter.js',
                                'app/js/factories/excel-factory.js',
                                'app/js/factories/bookFactory.js',
                                'app/js/factories/memberFactory.js',
                                'app/js/factories/userProfileFactory.js'
                            ]
                        })
                    }
                }
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
                controller: 'createBookCtrl',
                resolve: {
                    loadMyFiles:function($ocLazyLoad) {
                        return $ocLazyLoad.load({
                            name:'myApp',
                            files:[
                                'app/js/controllers/createBookController.js'
                            ]
                        })
                    }
                }
            })
            .state('dashboard.createMember', {
            url: '/createMember',
            templateUrl: 'app/views/createMember.html',
            controller: 'createMemberCtrl',
                resolve: {
                    loadMyFiles:function($ocLazyLoad) {
                        return $ocLazyLoad.load({
                            name:'myApp',
                            files:[
                                'app/js/controllers/createMember.js'
                            ]
                        })
                    }
                }
            })
            .state('dashboard.allBooks', {
                url: '/allBooks',
                templateUrl: 'app/views/allBooks.html',
                controller: 'allBooksCtrl',
                resolve: {
                    loadMyFiles:function($ocLazyLoad) {
                        return $ocLazyLoad.load({
                            name:'myApp',
                            files:[
                                'app/js/controllers/allbooksController.js',
                                'app/js/controllers/updateBookController.js'
                            ]
                        })
                    }
                }
            })
            .state('dashboard.allMember', {
                url: '/allMember',
                templateUrl: 'app/views/allMembers.html',
                controller: 'allMembersCtrl',
                    resolve: {
                        loadMyFiles:function($ocLazyLoad) {
                            return $ocLazyLoad.load({
                                name:'myApp',
                                files:[
                                    ' app/js/controllers/allMembersController.js',
                                    ' app/js/controllers/updateMemberController.js'
                                ]
                            })
                        }
                    }
            })
            .state('dashboard.charts', {
                url: '/charts',
                templateUrl: 'app/views/charts.html',
                controller: 'chartsCtrl',
                resolve: {
                    loadMyFiles:function($ocLazyLoad) {
                        return $ocLazyLoad.load({
                            name:'myApp',
                            files:[
                                'app/js/controllers/chartsController.js',

                            ]
                        })
                    }
                }
            })
            .state('dashboard.viewMember', {
                url: '/viewMember',
                templateUrl: 'app/views/viewMember.html',
                controller: 'viewMemberCtrl',
                resolve: {
                    loadMyFiles:function($ocLazyLoad) {
                        return $ocLazyLoad.load({
                            name:'myApp',
                            files:[
                                'app/js/controllers/viewMemberController.js',
                                'app/js/controllers/updateMemberController.js',
                                'app/js/controllers/payFineController.js'

                            ]
                        })
                    }
                }
            })
            .state('dashboard.viewBook', {
                url: '/viewBook',
                templateUrl: 'app/views/viewBook.html',
                controller: 'viewBookCtrl',
                resolve: {
                    loadMyFiles:function($ocLazyLoad) {
                        return $ocLazyLoad.load({
                            name:'myApp',
                            files:[
                                'app/js/controllers/viewBookController.js',
                                'app/js/controllers/updateBookController.js'

                            ]
                        })
                    }
                }
            })
            .state('dashboard.issueBook', {
                url: '/issueBook',
                templateUrl: 'app/views/issueBook.html',
                controller: 'issueBookCtrl',
                resolve: {
                    loadMyFiles:function($ocLazyLoad) {
                        return $ocLazyLoad.load({
                            name:'myApp',
                            files:[
                                'app/js/controllers/issueBookController.js',

                            ]
                        })
                    }
                }
            })
            .state('dashboard.userProfile', {
                url: '/userProfile',
                templateUrl: 'app/views/userprofile.html',
                controller: 'userProfileCtrl',
                resolve: {
                    loadMyFiles:function($ocLazyLoad) {
                        return $ocLazyLoad.load({
                            name:'myApp',
                            files:[
                                'app/js/controllers/userProfileController.js',
                                'app/js/controllers/updateUserController.js'
                            ]
                        })
                    }
                }
            })
            .state('dashboard.createUser', {
                url: '/createUser',
                templateUrl: 'app/views/createUser.html',
                controller: 'createUserCtrl',
                resolve: {
                    loadMyFiles:function($ocLazyLoad) {
                        return $ocLazyLoad.load({
                            name:'myApp',
                            files:[
                                'app/js/controllers/createUserController.js',

                            ]
                        })
                    }
                }
            })
            .state('dashboard.issuedBooks', {
                url: '/issuedBooks',
                templateUrl: 'app/views/issuedBooksLog.html',
                controller: 'issuedBooksCtrl',
                resolve: {
                    loadMyFiles:function($ocLazyLoad) {
                        return $ocLazyLoad.load({
                            name:'myApp',
                            files:[
                                'app/js/controllers/issuedBooksLogController.js',

                            ]
                        })
                    }
                }
            })
            .state('dashboard.returnBook', {
                url: '/returnBook',
                templateUrl: 'app/views/returnBook.html',
                controller: 'returnBookCtrl',
                params: { bookIssueId: null },
                resolve: {
                    loadMyFiles:function($ocLazyLoad) {
                        return $ocLazyLoad.load({
                            name:'myApp',
                            files:[
                                'app/js/controllers/returnBookController.js',

                            ]
                        })
                    }
                }
            })
            .state('dashboard.allUsers', {
            url: '/allUsers',
            templateUrl: 'app/views/allUsers.html',
            controller: 'allUsersCtrl',
                resolve: {
                    loadMyFiles:function($ocLazyLoad) {
                        return $ocLazyLoad.load({
                            name:'myApp',
                            files:[
                                'app/js/controllers/allUsersController.js',
                                'app/js/controllers/updateUserController.js',

                            ]
                        })
                    }
                }
            });

        /*   $locationProvider.html5Mode(true);
           $locationProvider.hashPrefix('!');*/
           //$locationProvider.hashPrefix('');

});