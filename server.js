const express = require('express');
const helmet = require('helmet');

const db = require('./data/db-config.js');

const server = express();

server.use(helmet());
server.use(express.json());
// Add and get projects

server.post('/api/projects', (req, res) => {
  db('projects').insert(req.body)
  .then(ids => {
    const id = ids[0];

    db('projects')
      .where({ id })
      .first()
    .then(project => {
      res.status(201).json(project);
    });
  })
  .catch(error => {
    res.status(500).json(error);
  });
});

server.get('/api/projects', (req, res) => {
  // get all projects from the database
  db('projects')
  .then(projects => {
    res.status(200).json(projects);
  })
  .catch(error => {
    res.status(500).json(error);
  });
});

// Add and get resources
server.post('/api/resources', (req, res) => {
  db('resources').insert(req.body)
  .then(ids => {
    const id = ids[0];

    db('resources')
      .where({ id })
      .first()
    .then(resource => {
      res.status(201).json(resource);
    });
  })
  .catch(error => {
    res.status(500).json(error);
  });
});

server.get('/api/resources', (req, res) => {
  // get all resources from the database
  db('resources')
  .then(resources => {
    res.status(200).json(resources);
  })
  .catch(error => {
    res.status(500).json(error);
  });
});

 //  add and get all tasks from the database
  // include project name
server.get('/api/tasks', (req, res) => {
  db('tasks as a')
    .leftJoin('projects as s', 's.id', 'a.projects_id')
    .select('a.id', 'a.project_name', 's.project_name')
  .then(tasks => {
    res.status(200).json(tasks);
  })
  .catch(error => {
    res.status(500).json(error);
  });
});

// create task
server.post('/api/tasks', (req, res) => {
  db('tasks').insert(req.body)
  .then(ids => {
    const id = ids[0];

    db('tasks')
      .where({ id })
      .first()
    .then(task => {
      res.status(201).json(task);
    });
  })
  .catch(error => {
    res.status(500).json(error);
  });
});


module.exports = server;

// // remove projects
// server.delete('/api/projects/:id', (req, res) => {
//   db('projects')
//     .where({ id: req.params.id })
//     .del()
//   .then(count => {
//     if (count > 0) {
//       res.status(204).end();
//     } else {
//       res.status(404).json({ message: 'Record not found' });
//     }
//   })
//   .catch(error => {
//     res.status(500).json(error);
//   });
// });