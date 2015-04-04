'use strict';

angular.module('mainApp.admin.controllers', []);

function AdminController ($scope) {
	// body...
}

function ListPostsController ($scope) {
	// body...
}

function CreatePostController ($scope) {
	// body...
}

function UpdatePostController ($scope) {
	// body...
}

angular.module('mainApp.admin.controllers').controller('AdminController', ['$scope', AdminController]);
angular.module('mainApp.admin.controllers').controller('ListPostsController', ['$scope', ListPostsController]);
angular.module('mainApp.admin.controllers').controller('CreatePostController', ['$scope', CreatePostController]);
angular.module('mainApp.admin.controllers').controller('UpdatePostController', ['$scope', UpdatePostController]);