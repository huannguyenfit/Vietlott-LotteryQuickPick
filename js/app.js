"use strict";
exports.__esModule = true;
var main_1 = require("./main");
var angular = require("./plugins/angular.min");
var app = angular.module('random-lottery', []);
app.controller('MainController', function($scope){
    $scope.type = 'mega'
	$scope.GetTickets = function(){
		$scope.result = new main_1.MainController($scope.type).PicksTicket()
	}	
});
angular.element(document).ready(function () {
    angular.bootstrap(document, ['random-lottery']);
});
