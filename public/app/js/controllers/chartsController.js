/**
 * Created by venkatesh on 4/5/2018.
 */
app.controller('chartsCtrl',['$scope','$state','$http','$cookieStore','bookfactory','memberfactory','appFactory',function($scope,$state,$http,$cookieStore,bookfactory,memberfactory,appFactory){
    $scope.singleobj={};
    $scope.singlememobj={};
    $scope.pieData=[];
    $scope.pieMemData=[];
    function init() {
        $scope.myPromise=bookfactory.getAllBooks().then(function(response) {
            console.log(response);
            $scope.totalBooks=response.data;
           /* $scope.totalItems = $scope.totalBooks.length;*/
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
                    $scope.labels.push(key);
                    $scope.data.push($scope.singleobj[key]);
                var piesingledata={name:key, y:$scope.singleobj[key]};
                $scope.pieData.push(piesingledata);
                }
            }
            console.log($scope.pieData);
        });
        $scope.myPromise=memberfactory.getAllMembers().then(function(response) {
            console.log(response);
            $scope.totalMembers=response.data;
            /*$scope.totalItems = $scope.totalMembers.length;*/
            for(var j=0;j<$scope.totalMembers.length;j++){
                if($scope.singlememobj.hasOwnProperty($scope.totalMembers[j].department)){
                    $scope.singlememobj[$scope.totalMembers[j].department]++;
                }
                else{
                    $scope.singlememobj[$scope.totalMembers[j].department]=1;
                }
            }
            console.log('$scope.singlememobj',$scope.singlememobj);
            for (var keys in $scope.singlememobj) {
                if ($scope.singlememobj.hasOwnProperty(keys)) {
                    console.log(keys + " -> " + $scope.singleobj[keys]);
                    $scope.memlabels.push(keys);
                    $scope.memdata.push($scope.singlememobj[keys]);
                    var piesinglememdata={name:keys, y:$scope.singlememobj[keys]};
                    $scope.pieMemData.push(piesinglememdata);
                }
            }
            console.log($scope.pieMemData);
        });

    }
/*
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
    };*/
    // Sample data for pie chart
    init();
    $scope.labels = [];
    $scope.memlabels = [];
    $scope.data = [];
    $scope.memdata = [];
   /* $scope.addSeries=function () {
        $scope.labels.push("post order sales");
        $scope.data.push(450);
    }*/
}]);