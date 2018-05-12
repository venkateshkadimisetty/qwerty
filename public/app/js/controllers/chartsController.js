/**
 * Created by venkatesh on 4/5/2018.
 */
app.controller('chartsCtrl',['$scope','$state','$http','$cookieStore','bookfactory','appFactory',function($scope,$state,$http,$cookieStore,bookfactory,appFactory){
    $scope.singleobj={};
    $scope.pieData=[];
    function init() {
        $scope.myPromise=bookfactory.getAllBooks().then(function(response) {
            console.log(response);
            $scope.totalBooks=response.data;
            $scope.totalItems = $scope.totalBooks.length;
            for(var i=0;i<$scope.totalBooks.length;i++){
                if($scope.singleobj.hasOwnProperty($scope.totalBooks[i].department)){
                    $scope.singleobj[$scope.totalBooks[i].department]++;
                }
                else{
                    $scope.singleobj[$scope.totalBooks[i].department]=1;
                }
            }
            console.log('$scope.singleobj',$scope.singleobj);
            for (var key in $scope.singleobj) {
                if ($scope.singleobj.hasOwnProperty(key)) {
                console.log(key + " -> " + $scope.singleobj[key]);
                var piesingledata={name:key, y:$scope.singleobj[key]};
                $scope.pieData.push(piesingledata);
                }
            }
            console.log($scope.pieData);
        });

    }

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
        }];
    init();
}]);