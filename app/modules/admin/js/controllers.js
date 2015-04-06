'use strict';

angular.module('mainApp.admin.controllers', []);

function AdminController ($scope, authService, $state, user) {
	$scope.logout = function() {
		authService.logout().then(function() {
			$state.go('login');
		});
	}
}

function LoginController ($scope, authService, $state) {
	$scope.buttonText = "Login";
	$scope.login = function() {
		$scope.buttonText = "Logging in...";
		authService.login($scope.credentials.username, $scope.credentials.password).then(function (data) {
			$state.go('admin.viewAllPosts');
		}, function (err) {
			$scope.invalidLogin = true;
		}).finally(function() {
			$scope.buttonText = "Login";
		});
	}
}

function ListPostsController ($scope, Post, popupService, $state) {
	$scope.posts = Post.query(); // Obtain all posts from backend
	$scope.deletePost = function(post) {
		if (popupService.showPopup('Really delete this?')) {
			post.$remove(function() {
				state.go('admin.viewAllPosts', undefined, {
					reload: true
				});
			});
		};
	};
}

function CreatePostController ($scope, $state, Post) {
	$scope.post = new Post();
	$scope.buttonText = "Create";
	$scope.savePost = function() {
		$scope.buttonText = "Saving...";
		$scope.post.permalink = angular.lowercase($scope.post.title).replace(/[\s]/g,'-');
		$scope.post.$save(function() {
			$state.go('admin.viewAllPosts');
		});
	};
}

function UpdatePostController ($scope, Post, $stateParams, $state) {
	$scope.post = Post.get({id: $stateParams.id});
	$scope.buttonText = "Update";
	$scope.updatePost = function() {
		$scope.buttonText = "Updating...";
		$scope.post.$update(function() {
			$state.go('admin.viewAllPosts');
		});
	};
}

angular.module('mainApp.admin.controllers').controller('AdminController', ['$scope', 'authService', '$state', 'user', AdminController]);
angular.module('mainApp.admin.controllers').controller('LoginController', ['$scope', 'authService', '$state', LoginController]);
angular.module('mainApp.admin.controllers').controller('ListPostsController', ['$scope', 'Post', 'popupService', '$state', ListPostsController]);
angular.module('mainApp.admin.controllers').controller('CreatePostController', ['$scope', '$state', 'Post', CreatePostController]);
angular.module('mainApp.admin.controllers').controller('UpdatePostController', ['$scope', 'Post', '$stateParams', '$state', UpdatePostController]);