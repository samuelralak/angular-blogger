'use strict';

angular.module('mainApp.posts.controllers', []);

function PostsController ($scope, postService) {
	$scope.getAllPosts = function() {
		return postService.getAll();
	};

	$scope.posts = $scope.getAllPosts();
}

function PostDetailsController ($stateParams, $state, $scope, postService) {
	$scope.getPostById = function(id) {
		return postService.getPostById(id);
	};

	$scope.closePost = function(id) {
		$state.go('allPosts');
	};

	$scope.singlePost = $scope.getPostById($stateParams.id);
}

angular.module('mainApp.posts.controllers').controller('PostsController', ['$scope', 'postService', PostsController]);
angular.module('mainApp.posts.controllers').controller('PostDetailsController', ['$stateParams', '$state', '$scope', 'postService', PostDetailsController]);