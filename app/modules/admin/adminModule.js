'use strict';

angular.module('mainApp.admin', [
	'mainApp.admin.controllers',
	'mainApp.admin.directives',
	'mainApp.admin.services',
	'mainApp.admin.filters'
]);

function adminStateConfig ($stateProvider) {
	$stateProvider.state('login', {
		url: '/login',
		controller: 'LoginController',
		resolve: {
			user: ['authService', '$q', function (authService, $q) {
				if (authService.user) {
					return $q.reject({authorized: true});
				};
			}]
		},
		templateUrl: 'modules/admin/views/login.html'
	}).state('admin', {
		url: '/admin',
		abstract: true,
		controller: 'AdminController',
		resolve: {
			user: ['authService', '$q', function (authService, $q) {
				return authService.user || $q.reject({unAuthorized: true});
			}]
		},
		templateUrl: 'modules/admin/views/admin-home.html'
	}).state('admin.newPost', {
		url: '/posts/new',
		controller: 'CreatePostController',
		templateUrl: 'modules/admin/views/admin-new-post.html'
	}).state('admin.updatePost', {
		url: '/posts/:id/edit',
		controller: 'UpdatePostController',
		templateUrl: 'modules/admin/views/admin-update-post.html'
	}).state('admin.viewAllPosts', {
		url: '',
		controller: 'ListPostsController',
		templateUrl: 'modules/admin/views/admin-all-posts.html'
	});
}

function listenStateChangeErrorEvent ($rootScope, $state, $cookieStore, authService) {
	$rootScope.$on('$stateChangeError', function (event, toState, toParams, fromState, fromParams, error) {
		if (error.unAuthorized) {
			$state.go("login");
		} else if (error.authorized) {
			$state.go('admin.viewAllPosts');
		};
	});

	authService.user=$cookieStore.get('user');
}

angular.module('mainApp.admin').config(['$stateProvider', adminStateConfig]);
angular.module('mainApp.admin').run(['$rootScope', '$state', '$cookieStore', 'authService', listenStateChangeErrorEvent]);