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
				angular.copy(scope.postInstance, savedPostInstance); //copy the post instance in `scope` to a variable `savedPostInstance`
				savedPostInstance.comments.unshift(scope.comment); 	//push the comment to the savedPostInstance
				scope.postInstance.comments.unshift(scope.comment); //push the comment to the `scope.postInstance` as well
				scope.comment = {}; // clear the comment
				savedPostInstance.$update(); //Now update `savedPostInstance` so that the new comment goes to the server.
			}
		},
		templateUrl:'modules/posts/views/comments.html'
	}
}

angular.module('mainApp.posts.directives').directive('commentsDirective', commentsDirective);