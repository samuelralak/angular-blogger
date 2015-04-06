'use strict';

angular.module('mainApp.admin.filters', []);

function permalink () {
	return function (title) {
		return title===undefined ? '' : angular.lowercase(title).replace(/[\s]/g,'-');
	}
}

function wordcount () {
	return function (input) {
		return input===undefined ? 0 : input.split(/\s/g).length;
	}
}

angular.module('mainApp.admin.filters'	).filter('permalink', permalink);
angular.module('mainApp.admin.filters'	).filter('wordcount', wordcount);