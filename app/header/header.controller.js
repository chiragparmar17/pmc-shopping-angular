'use strict';

angular.
    module("header").
    controller("HeaderController", HeaderController);

HeaderController.$inject = ['$scope'];

function HeaderController($scope) {
    $scope.title = "PMC Shopping Application";
}