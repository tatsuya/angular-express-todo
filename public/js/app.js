/*global angular */

'use strict';

angular.module('todoApp', [
  'ngRoute',
  'todoApp.controllers'
]).
config(function($routeProvider, $locationProvider) {
  $routeProvider.
    when('/', {
      templateUrl: 'partials/index',
      controller: 'IndexCtrl'
    }).
    when('/addTodo', {
      templateUrl: 'partials/addTodo',
      controller: 'AddTodoCtrl'
    }).
    when('/editTodo/:id', {
      templateUrl: 'partials/editTodo',
      controller: 'EditTodoCtrl'
    }).
    when('/deleteTodo/:id', {
      templateUrl: 'partials/deleteTodo',
      controller: 'DeleteTodoCtrl'
    }).
    otherwise({
      redirectTo: '/'
    });
  $locationProvider.html5Mode(true);
});
