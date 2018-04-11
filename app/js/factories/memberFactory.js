/**
 * Created by venkatesh on 3/24/2018.
 */
app.factory('memberfactory',function ($http,$cookieStore) {
    var memSer={};
    memSer.createMember=function(member) {
        var token=$cookieStore.get('token');
        console.log('token',token);
       return $http.post('https://lbmanager-node.herokuapp.com/api/member/create',member,{headers:{'x-access-token':token,'Content-Type':'Application/json'}}).then(function (response) {
            console.log(response);
           return response;
        }, function (error) {
            alert("Fetching data failed!!!");
           return error;
        });
    }
    memSer.updateMember=function(member) {
        var token=$cookieStore.get('token');
        console.log('token',token);
        return $http.post('https://lbmanager-node.herokuapp.com/api/member/update',member,{headers:{'x-access-token':token,'Content-Type':'Application/json'}}).then(function (response) {
            console.log(response);
            return response;
        }, function (error) {
            alert("Fetching data failed!!!");
            return error;
        });
    }
    memSer.deleteMember=function(member) {
        var token=$cookieStore.get('token');
        console.log('token',token);
        return $http.post('https://lbmanager-node.herokuapp.com/api/member/delete',member,{headers:{'x-access-token':token,'Content-Type':'Application/json'}}).then(function (response) {
            console.log(response);
            return response;
        }, function (error) {
            alert("Fetching data failed!!!");
            return error;
        });
    }
    memSer.getAllMembers=function () {
       return $http.get('https://lbmanager-node.herokuapp.com/api/member/listAllMembers').then(function (response) {
            console.log(response);
           return response;
        }, function (error) {
            alert("Fetching data failed!!!");
           return error;
        });
    }
    return memSer;

});