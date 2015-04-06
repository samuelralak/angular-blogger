'use strict';

angular.module('mainApp',[
	'ui.router',
	'ngResource',
	'ngAnimate',
	'ngCookies',
	'pascalprecht.translate',
	'mainApp.posts',
	'mainApp.admin',
	'mainApp.controllers'
]);

function mainAppConfig ($translateProvider, $httpProvider) {
	$translateProvider.translations('en', {
		TITLE: 'The Shyre Blogger',
		SUBTITLE: 'A complete solution for comprehensive articles',
		COMMENTS: 'Comments',
		BY:'By',
		ADD:'Add'
	});

	$translateProvider.translations('sw', {
		TITLE: 'Mwandishi Wa Shaya',
		SUBTITLE: 'Ufumbuzi kamili wa makala ya kina',
		COMMENTS: 'Maoni',
		BY:'Na',
		ADD:'Ongeza'
	});

	$translateProvider.preferredLanguage('en');
	$httpProvider.defaults.withCredentials = true;
}

angular.module('mainApp').value('version','V1.0');

angular.module('mainApp').run(['$state', '$rootScope', '$translate', function($state, $rootScope, $translate) {
	$state.go('allPosts');

	$rootScope.languagePreference = { currentLanguage: 'en' };
	$rootScope.languagePreference.switchLanguage = function  (key) {
		$translate.use(key);
		$rootScope.languagePreference.currentLanguage = key;
	}
}]);

angular.module('mainApp').config(['$translateProvider', '$httpProvider', mainAppConfig]);