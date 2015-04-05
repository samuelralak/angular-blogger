'use strict';

angular.module('mainApp',[
	'ui.router',
	'ngResource',
	'mainApp.posts',
	'mainApp.admin',
	'mainApp.controllers'
]);

angular.module('mainApp').value('version','V1.0');

angular.module('mainApp').run(['$state', function($state) {
	$state.go('allPosts');
}]);