/**
 * Created by venkatesh on 3/29/2018.
 */
/**
 * Created by Venkatesh Kadimisetty
 * Date: 7/5/2016.
 */
app.factory('appFactory', ['ngToast', function (ngToast) {
    'use strict';
    var appFactory = {};

    appFactory.toast=function(msg,type){
        ngToast.dismiss();
        if(type=='success'){
            ngToast.create({
                className: type,
                content: '<div><img src="app/images/toast message tick.png">'+msg+'</div>'
            });
        }
        else {
            ngToast.create({
                className: type,
                combineDuplications: true,
                content: '<div>'+msg+'</div>'
            });
        }
    }



    return appFactory;
}]);