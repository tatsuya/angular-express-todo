'use strict';

/**
 * Serve JSON to our AngularJS client
 */

var express = require('express');
var router = express.Router();

// For a real app, you'd make database requests here.
// For this example, "data" acts like an in-memory "database"
var data = {
  todos: [
    {
      title: 'Lorem ipsum',
      completed: false
    },
    {
      title: 'Sed egestas',
      completed: true
    }
  ]
};

// GET

router.get('/todos', function(req, res) {
  var todos = [];
  data.todos.forEach(function(todo, i) {
    todos.push({
      id: i,
      title: todo.title,
      completed: todo.completed
    });
  });
  res.json({
    todos: todos
  });
});

router.get('/todo/:id', function(req, res) {
  var id = req.params.id;
  if (id >= 0 && id < data.todos.length) {
    res.json({
      todo: data.todos[id]
    });
  } else {
    res.json(false);
  }
});

// POST

router.post('/todo', function(req, res) {
  data.todos.push(req.body);
  res.json(req.body);
});

// PUT

router.put('/todo/:id', function(req, res) {
  var id = req.params.id;
  if (id >= 0 && id < data.todos.length) {
    data.todos[id] = req.body;
    res.json(true);
  } else {
    res.json(false);
  }
});


// DELETE

router.delete('/todo/:id', function(req, res) {
  var id = req.params.id;
  if (id >= 0 && id < data.todos.length) {
    data.todos.splice(id, 1);
    res.json(true);
  } else {
    res.json(false);
  }
});

module.exports = router;