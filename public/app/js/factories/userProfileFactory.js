/**
 * Created by venkatesh on 4/26/2018.
 */
app.factory('userfactory',['$http','$cookieStore','baseUrl',function ($http,$cookieStore,baseUrl) {
    var userdata={};
    userdata.userProfile=function() {
        var token=$cookieStore.get('token');
        console.log('token',token);
        return $http.get(baseUrl+'/api/user/profile',{headers:{'x-access-token':token,'Content-Type':'Application/json'}}).then(function (response) {
            console.log(response);
            return response;
        }, function (error) {
            alert("Fetching data failed!!!");
            return error;
        });
    }
    userdata.allUsers=function() {
        var token=$cookieStore.get('token');
        console.log('token',token);
        return $http.get(baseUrl+'/api/user/listUsers',{headers:{'x-access-token':token,'Content-Type':'Application/json'}}).then(function (response) {
            console.log(response);
            return response;
        }, function (error) {
            alert("Fetching data failed!!!");
            return error;
        });
    }
    return userdata;
}]);