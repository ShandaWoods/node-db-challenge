exports.seed = function(knex, Promise) {
    return knex('tasks').insert([   
      { task_id: 1, task_name: 'Turn on computer', description: "Flick on the money maker", task_notes: "", project_id: 1, resource_id: 1, completed: false },
      
      { task_id: 2, task_name: 'Stare at a screen', description: "Watch myself in the third person as my eyes glaze over at this DB sprint challenge", task_notes: "", project_id: 1, resource_id: 2,resource_id: 3, completed: false },

      { task_id: 3, task_name: 'Use my brain', description: "Think real hard until my ears bleed", task_notes: "", project_id: 1, resource_id: 4, resource_id: 5, completed: false },

      { task_id: 4, task_name: 'Flex my biceps', description: "Do my best impersonation of ARNOLD", task_notes: "", project_id: 2, resource_id: 5, completed: false },

      { task_id: 5, task_name: 'Draw on a wall', description: "Draw some uneven lines", task_notes: "", project_id: 2, resource_id: 8, completed: false },

      { task_id: 6, task_name: 'Hammer a nail', description: "Use my pent up frustration to nail it", task_notes: "", project_id: 2, resource_id: 7, completed: false },

    ]);
  };
  