/**
 * Created by venkatesh on 3/25/2018.
 */
app.factory('bookfactory',function ($http,$cookieStore) {
    var bookser={};
    bookser.createBook=function(book) {
        var token=$cookieStore.get('token');
        console.log('token',token);
        return $http.post('https://lbmanager-node.herokuapp.com/api/book/create',book,{headers:{'x-access-token':token,'Content-Type':'Application/json'}}).then(function (response) {
            console.log(response);
            return response;
        }, function (error) {
            alert("Fetching data failed!!!");
            return error;
        });
    }
    bookser.updateBook=function(book) {
        var token=$cookieStore.get('token');
        console.log('token',token);
        return $http.post('https://lbmanager-node.herokuapp.com/api/book/update',book,{headers:{'x-access-token':token,'Content-Type':'Application/json'}}).then(function (response) {
            console.log(response);
            return response;
        }, function (error) {
            alert("Fetching data failed!!!");
            return error;
        });
    }
    bookser.deleteBook=function(book) {
        var token=$cookieStore.get('token');
        console.log('token',token);
        return $http.post('https://lbmanager-node.herokuapp.com/api/book/delete',book,{headers:{'x-access-token':token,'Content-Type':'Application/json'}}).then(function (response) {
            console.log(response);
            return response;
        }, function (error) {
            alert("Fetching data failed!!!");
            return error;
        });
    }
    bookser.getAllBooks=function () {
        return $http.get('https://lbmanager-node.herokuapp.com/api/book/listAllBooks').then(function (response) {
            console.log(response);
            return response;
        }, function (error) {
            alert("Fetching data failed!!!");
            return error;
        });
    }
    bookser.fetchBook=function (bookId) {
        return $http.post('https://lbmanager-node.herokuapp.com/api/book/fetch',{bookId:bookId}).then(function (response) {
            console.log(response);
            return response;
        }, function (error) {
            alert("Fetching data failed!!!");
            return error;
        });
    }
    bookser.issueBook=function (issueobj) {
        return $http.post('https://lbmanager-node.herokuapp.com/api/bookIssue/issueBook',issueobj).then(function (response) {
            console.log(response);
            return response;
        }, function (error) {
            alert("Fetching data failed!!!");
            return error;
        });
    }
    return bookser;
});