var app = angular.module('myApp', []);

app.controller('myCtrl', function($scope, $http) {
	var url = 'https://newsapi.org/v1/articles?';
	// newest
	var sortNew = 'latest';
	// original
	var sortTop = 'top';
	var keys = 'apiKey=15b31868ac09437dbce82f1f829c5d54';
	// varable to be toggled
	var tog = false;
	// AJAX request functions, argument is passed from html
	$scope.loadNewsTog = function(x) {
		tog = !tog;
		if (tog) {
    		$http.get(url+'source='+x+'&sortBy='+sortTop+'&'+keys).then(function(response){
        	$scope.myStory = response.data;});
        }else{
        	$http.get(url+'source='+x+'&sortBy='+sortNew+'&'+keys).then(function(response){
        	$scope.myStory = response.data;});
        };
    };
       // standard load
    $scope.loadNews = function(x) {
    	$http.get(url+'source='+x+'&sortBy='+sortTop+'&'+keys).then(function(response){
        	$scope.myStory = response.data;
        });
    };

});