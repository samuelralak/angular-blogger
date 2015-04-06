'use strict';

beforeEach(module('mainApp.posts.controllers'));
beforeEach(module('mainApp.posts.services'));
beforeEach(module('mainApp.admin.services'));
beforeEach(module('ngResource'));
beforeEach(module('ui.router'));

describe('PostsController Test\n', function(){
	var $httpBackend;

	beforeEach(inject(function (_$httpBackend_) {
		$httpBackend = _$httpBackend_;
		$httpBackend.expectGET('http://spblogger-sitepointdemos.rhcloud.com/api/posts').respond([
			{title:'Test',_id:1},
			{title:'Test2',_id:2}
		]);
	}));

	it('Should initialize controller with 2 posts', inject(function($rootScope,$controller,Post) {
		var $scope = $rootScope.$new();

		$controller('PostsController', { $scope:$scope, Post:Post });
		$httpBackend.flush();
		expect($scope.posts.length).toBe(2);
	}));
});

describe('PostDetailsController Test\n', function(){
	var $httpBackend;

	beforeEach(inject(function (_$httpBackend_) {
		$httpBackend = _$httpBackend_;
		$httpBackend.expectGET('http://spblogger-sitepointdemos.rhcloud.com/api/posts/2').respond({title:'Test2',_id:2});
	}));

	it('Should initialize controller with 1 post', inject(function($state, $stateParams, $rootScope, $controller, Post) {
		var $scope = $rootScope.$new();
		$stateParams.id = 2;
		$controller('PostDetailsController',{ $scope:$scope, $stateParams:$stateParams, $state:$state, Post:Post });
		$httpBackend.flush();
		expect($scope.singlePost).not.toBe(undefined);
	}));
});