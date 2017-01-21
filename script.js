var app=angular.module("myModule",[]);
app.controller("firstController", function($scope) {
	$scope.message = "AngularJS Concept";
});

app.controller("dataController", function($scope) {
	var listEmployees = [
	{firstName: "abhi", lastName: "k", gender:"M", salary: 3000},
	{firstName: "abhf", lastName: "kd", gender:"f", salary: 3030},
	{firstName: "abshi", lastName: "kf", gender:"f", salary: 3400},
	{firstName: "abgi", lastName: "kv", gender:"M", salary: 3020}
	];
	$scope.employees = listEmployees;
});


app.controller("formController", function($scope) {
	$scope.reset=function() {
	$scope.firstName = "";
	$scope.lastName = "";
	$scope.email = "";
	}
});

app.controller("recordsController", function($scope, $http) {
	var url="example.json";
	$http.get(url).then(function(response){
		var data = response.data;
		$scope.records=data;
	});
});