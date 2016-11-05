"use strict";

var app = angular.module("app", ['ngRoute']);

app.config(function ($routeProvider, $locationProvider) {

    $routeProvider
        .when("/", {
        templateUrl: "/views/home.html",
        controller: 'homeCtrl'
        }).
        otherwise({ redirectTo: '/' });

    $locationProvider.html5Mode(true);

});
