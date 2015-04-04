'use strict';

angular.module('mainApp.admin', [
	'mainApp.admin.controllers',
	'mainApp.admin.directives',
	'mainApp.admin.services',
	'mainApp.admin.filters'
]);

function adminStateConfig ($stateProvider) {
	$stateProvider.state('admin', {
		url: '/admin',
		abstract: true,
		controller: 'AdminController',
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

angular.module('mainApp.admin').config(['$stateProvider', adminStateConfig]);