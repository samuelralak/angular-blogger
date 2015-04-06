'use strict';

beforeEach(module('mainApp.posts.directives'));
beforeEach(module('mainApp.admin.services'));
//	beforeEach(module('templates')); 

describe('Directive Test\n', function(){
	it('Should initialize comments div with 2 comments', inject(function($rootScope,$compile) {
		var $scope = $rootScope.$new();
		$scope.singlePost = {
			comments:[{
				content:'test',author:'test'
			}, {
				content:'test1',author:'test1'
			}]};
		var template = '<comments-directive post-instance="singlePost"></comments-directive>';
		var elem = angular.element(template);
		$compile(elem)($scope); // Link it with proper scope
		$rootScope.$digest(); // Fire a digest so that expressions are evaluated
		expect(elem.find('.single-comment').length).toBe(2); // Expect number of comments to be 2
	}));
});
