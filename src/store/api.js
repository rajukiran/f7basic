import VueRouter from 'vue-router';

export default {

    // Send a Post request and do callback

    post(context, url, params, callback) {

        // params.context = context;
        context.$http.post(url, params, callback)
            .then(function(response) {
                return callback(response, new VueRouter());
            }).catch(function(error) {
                console.log(error);
            });
    },

    get(context, url, params, callback) {

        context.$http.get(url, params, callback)
            .then(function(response) {
                params.context = context;
                return callback(response, new VueRouter());
            }).catch(function(error) {
                console.log(error);
            });
    },
}
