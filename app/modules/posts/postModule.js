'use strict';

angular.module('mainApp.posts',[
	'mainApp.posts.controllers',
	'mainApp.posts.directives',
	'mainApp.posts.services',
	'mainApp.posts.filters'
]);


function postsStateConfig ($stateProvider, $locationProvider) {
	$stateProvider.state('allPosts', {
		url: '/posts',
		templateUrl: 'modules/posts/views/posts.html',
		controller: 'PostsController'
	});

	$stateProvider.state('singlePost', {
		url: '/posts/:id/:permalink',
		templateUrl: 'modules/posts/views/singlePost.html',
		controller: 'PostDetailsController'
	});
}

angular.module('mainApp.posts').config(['$stateProvider', '$locationProvider', postsStateConfig]);