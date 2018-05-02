/**
 * Created by venkatesh on 3/24/2018.
 */
app.factory('memberfactory',['$http','$cookieStore','baseUrl',function ($http,$cookieStore,baseUrl) {
    var memSer={};
    memSer.createMember=function(member) {
        var token=$cookieStore.get('token');
        console.log('token',token);
       return $http.post(baseUrl+'/api/member/create',member,{headers:{'x-access-token':token,'Content-Type':'Application/json'}}).then(function (response) {
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
        return $http.post(baseUrl+'/api/member/update',member,{headers:{'x-access-token':token,'Content-Type':'Application/json'}}).then(function (response) {
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
        return $http.post(baseUrl+'/api/member/delete',member,{headers:{'x-access-token':token,'Content-Type':'Application/json'}}).then(function (response) {
            console.log(response);
            return response;
        }, function (error) {
            alert("Fetching data failed!!!");
            return error;
        });
    }
    memSer.getAllMembers=function () {
        var token=$cookieStore.get('token');
        console.log('token',token);
       return $http.get(baseUrl+'/api/member/listAllMembers',{headers:{'x-access-token':token,'Content-Type':'Application/json'}}).then(function (response) {
            console.log(response);
           return response;
        }, function (error) {
            alert("Fetching data failed!!!");
           return error;
        });
    }
    memSer.fetchMember=function (mid) {
        var token=$cookieStore.get('token');
        console.log('token',token);
        return $http.post(baseUrl+'/api/member/fetch',{memberId:mid},{headers:{'x-access-token':token,'Content-Type':'Application/json'}}).then(function (response) {
            console.log(response);
            return response;
        }, function (error) {
            alert("Fetching data failed!!!");
            return error;
        });
    }
    memSer.payFine=function (obj) {
        var token=$cookieStore.get('token');
        console.log('token',token);
        return $http.post(baseUrl+'/api/member/collectFine',obj,{headers:{'x-access-token':token,'Content-Type':'Application/json'}}).then(function (response) {
            console.log(response);
            return response;
        }, function (error) {
            alert("Fetching data failed!!!");
            return error;
        });
    }
    return memSer;
}]);