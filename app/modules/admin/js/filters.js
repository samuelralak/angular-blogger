'use strict';

angular.module('mainApp.admin.filters', []);

function permalink () {
	return function (title) {
		return title===undefined ? '' : angular.lowercase(title).replace(/[\s]/g,'-');
	}
}

angular.module('mainApp.admin.filters'	).filter('permalink', permalink);