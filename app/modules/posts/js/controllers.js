'use strict';

angular.module('mainApp.posts.controllers', []);

function PostsController ($scope, Post) {
	$scope.posts = Post.query();
}

function PostDetailsController ($stateParams, $state, $scope, Post) {
	$scope.closePost = function(id) {
		$state.go('allPosts');
	};

	$scope.singlePost = Post.get({id: $stateParams.id});
	console.log("SINGLE POST: " + $scope.singlePost.stringify);
}

angular.module('mainApp.posts.controllers').controller('PostsController', ['$scope', 'Post', PostsController]);
angular.module('mainApp.posts.controllers').controller('PostDetailsController', ['$stateParams', '$state', '$scope', 'Post', PostDetailsController]);