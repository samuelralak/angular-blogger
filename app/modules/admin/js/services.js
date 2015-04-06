'use strict';

angular.module('mainApp.admin.services', []);

function Post ($resource, API_ENDPOINT) {
	return $resource(API_ENDPOINT, { id: '@_id' }, {
		update: {
			method: 'PUT'
		}
	});
}

function popupService ($window) {
	this.showPopup = function(message) {
		return $window.confirm(message);
	}
}

function authService (AUTH_ENDPOINT, LOGOUT_ENDPOINT, $http, $cookieStore) {
	var auth = {};
	auth.login = function (username, password) {
		return $http.post(AUTH_ENDPOINT, {username: username, password: password}).then(function (response, status) {
			auth.user = response.data;
			$cookieStore.put('user', auth.user);
			return auth.user;
		});
	}

	auth.logout = function() {
		return $http.post(LOGOUT_ENDPOINT).then(function (response) {
			auth.user = undefined;
			$cookieStore.remove('user');
		});
	}

	return auth;
}

angular.module('mainApp.admin.services').factory('Post', ['$resource', 'API_ENDPOINT', Post]);
angular.module('mainApp.admin.services').service('popupService', ['$window', popupService]);
angular.module('mainApp.admin.services').factory('authService', ['AUTH_ENDPOINT', 'LOGOUT_ENDPOINT', '$http', '$cookieStore', authService]);
angular.module('mainApp.admin.services').value('API_ENDPOINT', 'https://angular-blogger-backend.herokuapp.com/api/posts/:id');
angular.module('mainApp.admin.services').value('AUTH_ENDPOINT','https://angular-blogger-backend.herokuapp.com/login');
angular.module('mainApp.admin.services').value('LOGOUT_ENDPOINT','https://angular-blogger-backend.herokuapp.com/logout');