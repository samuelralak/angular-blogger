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

angular.module('mainApp.admin.services').factory('Post', ['$resource', 'API_ENDPOINT', Post]);
angular.module('mainApp.admin.services').service('popupService', ['$window', popupService]);
angular.module('mainApp.admin.services').value('API_ENDPOINT', 'http://spblogger-sitepointdemos.rhcloud.com/api/posts/:id');