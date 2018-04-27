/**
 * Created by venkatesh on 4/26/2018.
 */
app.factory('userfactory',function ($http,$cookieStore) {
    var userdata={};
    userdata.userProfile=function() {
        var token=$cookieStore.get('token');
        console.log('token',token);
        return $http.get('https://lbmanager-node.herokuapp.com/api/user',{headers:{'x-access-token':token,'Content-Type':'Application/json'}}).then(function (response) {
            console.log(response);
            return response;
        }, function (error) {
            alert("Fetching data failed!!!");
            return error;
        });
    }
    return userdata;
});