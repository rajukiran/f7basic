
export default {

    // User object will let us check authentication status
    user: {
        authenticated: false
    },

    // To log out, we just need to remove the token
    logout() {
        localStorage.removeItem('id_token');
        this.user.authenticated = false;
    },

    // To authorize user, we just need to check id_token exists in local storage
    checkAuth() {

        var jwt = localStorage.getItem('id_token')

        if (jwt) {
            this.user.authenticated = true
        } else {
            this.user.authenticated = false
        }

        return this.user.authenticated;

    },

    // Will return current user permissions
    getPermissions() {

        if (this.checkAuth()) {
            return JSON.parse(localStorage.getItem('permissions'));
        } else
            return undefined;

    },

    // Will set current user permissions
    setPermissions(permissions) {

        let permissionsObj = {};

        if(permissions.indexOf("owner") != -1)
            permissionsObj.default = "owner";
        else if(permissios.indexOf("instructor") != -1)
            permissionsObj.default = "instructor";
        else if(permissios.indexOf("student") != -1)
            permissionsObj.default = "student";
        else if(permissios.indexOf("guardian") != -1)
            permissionsObj.default = "guardian";

        permissionsObj.default = "instructor";
        permissionsObj.permissions = permissions;

        localStorage.setItem('permissions', JSON.stringify(permissionsObj));

    },

    // To authorize user, we just need to set id_token in local storage
    setAuth(token) {

        this.user.authenticated = true;
        localStorage.setItem('id_token', token)

    }

}
