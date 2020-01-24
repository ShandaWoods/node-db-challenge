exports.seed = function(knex, Promise) {
    return knex('tasks').insert([   
      { task_id: 1, task_name: '', description: "", task_notes: "", project_id:"", completed: false },
      
      { task_id: 2, task_name: '', description: "", task_notes: "", project_id:"", completed: false },

      { task_id: 3, task_name: '', description: "", task_notes: "", project_id:"", completed: false },

      { task_id: 4, task_name: '', description: "", task_notes: "", project_id:"", completed: false },

      { task_id: 5, task_name: '', description: "", task_notes: "", project_id:"", completed: false },

      { task_id: 6, task_name: '', description: "", task_notes: "", project_id:"", completed: false },

    ]);
  };
  