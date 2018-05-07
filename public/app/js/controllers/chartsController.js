/**
 * Created by venkatesh on 4/5/2018.
 */
app.controller('chartsCtrl',['$scope','$state','$http','$cookieStore','bookfactory','appFactory',function($scope,$state,$http,$cookieStore,bookfactory,appFactory){
    function init() {
        $scope.myPromise=bookfactory.getAllBooks().then(function(response) {
            console.log(response);
            $scope.totalBooks=response.data;
            $scope.totalItems = $scope.totalBooks.length;
        });
    }
    init();
    $scope.chartOptions = {
        title: {
            text: 'Temperature data'
        },
        xAxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        },

        series: [{
            data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]
        }]
    };
    // Sample data for pie chart
    $scope.pieData = [
        {
        name: "CIVIL",
        y: 5
    }, {
        name: "ECE",
        y: 7,
        sliced: true,
        selected: true
    }, {
        name: "EEE",
        y: 10
    }, {
        name: "CSE",
        y: 8
    }, {
        name: "MECH",
        y: 6
    }, {
        name: "MCA",
        y: 0
    }, {
        name: "MBA",
        y: 5
        }]
}]);