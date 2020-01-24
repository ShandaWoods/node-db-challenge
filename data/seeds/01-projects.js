
exports.seed = function(knex, Promise) {
    return knex('projects').insert([   
      { project_id: 1, proj_name: 'Sprint Challenge', description: "Rock out this database biz", completed: false },
      
      { project_id: 2, proj_name: 'Hang Whiteboard', description: "Install my whiteboard so I don't lose my mind writing on paper", completed: false }
    ]);
  };
  