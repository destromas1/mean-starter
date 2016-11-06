"use strict";

var app = angular.module("app", ['ngRoute']);

app.config(function ($routeProvider, $locationProvider) {

    $routeProvider
        .when("/", {
        templateUrl: "/views/home.html",
        controller: 'homeCtrl'
        }).
        when("/signup", {
        templateUrl: "/views/signup.html",
        controller: 'signupCtrl'
        }).
        when("/login", {
        templateUrl: "/views/login.html",
        controller: 'loginCtrl'
        }).
        otherwise({ redirectTo: '/' });

    $locationProvider.html5Mode(true);

});
