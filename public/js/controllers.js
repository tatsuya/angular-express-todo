/*global angular */

'use strict';

/* Controllers */

angular.module('todoApp.controllers', []).
  controller('IndexCtrl', function($scope, $http, $location) {
    $http.get('/api/todos').
      success(function(data) {
        $scope.todos = data.todos;
      });
    $scope.toggleTodo = function(todo) {
      todo.completed = !todo.completed;
      $http.put('/api/todo/' + todo.id, todo).
        success(function() {
          $location.url('/');
        });
    };
  }).
  controller('AddTodoCtrl', function($scope, $http, $location) {
    $scope.form = {};
    $scope.submitTodo = function() {
      $http.post('/api/todo', $scope.form).
        success(function() {
          $location.path('/');
        });
    };
  }).
  controller('EditTodoCtrl', function($scope, $http, $location, $routeParams) {
    $scope.form = {};
    $http.get('/api/todo/' + $routeParams.id).
      success(function(data) {
        $scope.form = data.todo;
      });

    $scope.editTodo = function() {
      $http.put('/api/todo/' + $routeParams.id, $scope.form).
        success(function() {
          $location.url('/');
        });
    };
  }).
  controller('DeleteTodoCtrl', function($scope, $http, $location, $routeParams) {
    $http.get('/api/todo/' + $routeParams.id).
      success(function(data) {
        $scope.todo = data.todo;
      });

    $scope.deleteTodo = function() {
      $http.delete('/api/todo/' + $routeParams.id).
        success(function() {
          $location.url('/');
        });
    };

    $scope.home =  function() {
      $location.url('/');
    };
  });
