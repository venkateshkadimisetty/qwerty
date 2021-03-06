/**
 * Created by venkatesh on 3/25/2018.
 */
app.factory('bookfactory',['$http','$cookieStore','baseUrl',function ($http,$cookieStore,baseUrl) {
    var bookser={};
    bookser.createBook=function(book) {
        var token=$cookieStore.get('token');
        console.log('token',token);
        return $http.post(baseUrl+'/api/book/create',book,{headers:{'x-access-token':token,'Content-Type':'Application/json'}}).then(function (response) {
            console.log(response);
            return response;
        }, function (error) {
            return error;
        });
    }
    bookser.updateBook=function(book) {
        var token=$cookieStore.get('token');
        console.log('token',token);
        return $http.post(baseUrl+'/api/book/update',book,{headers:{'x-access-token':token,'Content-Type':'Application/json'}}).then(function (response) {
            console.log(response);
            return response;
        }, function (error) {

            return error;
        });
    }
    bookser.deleteBook=function(book) {
        var token=$cookieStore.get('token');
        console.log('token',token);
        return $http.post(baseUrl+'/api/book/delete',book,{headers:{'x-access-token':token,'Content-Type':'Application/json'}}).then(function (response) {
            console.log(response);
            return response;
        }, function (error) {

            return error;
        });
    }
    bookser.getAllBooks=function () {
        var token=$cookieStore.get('token');
        return $http.get(baseUrl+'/api/book/listAllBooks',{headers:{'x-access-token':token,'Content-Type':'Application/json'}}).then(function (response) {
            console.log(response);
            return response;
        }, function (error) {

            return error;
        });
    }
    bookser.fetchBook=function (bookId) {
        var token=$cookieStore.get('token');
        return $http.post(baseUrl+'/api/book/fetch',{bookId:bookId},{headers:{'x-access-token':token,'Content-Type':'Application/json'}}).then(function (response) {
            console.log(response);
            return response;
        }, function (error) {

            return error;
        });
    }
    bookser.issueBook=function (issueobj) {
        var token=$cookieStore.get('token');
        return $http.post(baseUrl+'/api/bookIssue/issueBook',issueobj,{headers:{'x-access-token':token,'Content-Type':'Application/json'}}).then(function (response) {
            console.log(response);
            return response;
        }, function (error) {

            return error;
        });
    }
    bookser.fetchIssueBook=function (bookIssueId) {
        var token=$cookieStore.get('token');
        return $http.post(baseUrl+'/api/bookIssue/fetchIssueBookDetails',{bookIssueId:bookIssueId},{headers:{'x-access-token':token,'Content-Type':'Application/json'}}).then(function (response) {
            console.log(response);
            return response;
        }, function (error) {

            return error;
        });
    }
    bookser.returnIssueBook=function (bookIssueId) {
        var token=$cookieStore.get('token');
        return $http.post(baseUrl+'/api/bookIssue/collectBook',bookIssueId,{headers:{'x-access-token':token,'Content-Type':'Application/json'}}).then(function (response) {
            console.log(response);
            return response;
        }, function (error) {

            return error;
        });
    }
    bookser.fetchIssueBookofMember=function (memberId) {
        var token=$cookieStore.get('token');
        return $http.get(baseUrl+'/api/bookIssue/fetchIssueBookDetails/'+memberId,{headers:{'x-access-token':token,'Content-Type':'Application/json'}}).then(function (response) {
            console.log(response);
            return response;
        }, function (error) {

            return error;
        });
    }
    bookser.issuedBooks=function () {
        var token=$cookieStore.get('token');
        return $http.get(baseUrl+'/api/bookIssue/listAllBookIssues',{headers:{'x-access-token':token,'Content-Type':'Application/json'}}).then(function (response) {
            console.log(response);
            return response;
        }, function (error) {

            return error;
        });
    }
    return bookser;
}]);