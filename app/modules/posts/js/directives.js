'use strict';

angular.module('mainApp.posts.directives', []);

function commentsDirective (Post) {
	return {
		restrict: 'AEC',
		scope: { postInstance: '=' },
		replace: true,
		link:function (scope, elem, attrs) {
			scope.saveComment = function() {
				var postID = scope.postInstance._id, 
					savedPostInstance = {};
				scope.comment.datePublished = new Date();
				angular.copy(scope.postInstance, savedPostInstance); 
				savedPostInstance.comments.unshift(scope.comment); 	
				scope.postInstance.comments.unshift(scope.comment); 
				scope.comment = {}; 
				savedPostInstance.$update(); 
			}
		},
		templateUrl:'modules/posts/views/comments.html'
	}
}

angular.module('mainApp.posts.directives').directive('commentsDirective', ['Post', commentsDirective]);