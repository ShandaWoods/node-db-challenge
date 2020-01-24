exports.seed = function(knex, Promise) {
    return knex('resources').insert([
      { resource_name: "Computer", resource_id: 1, resource_description: "Big thinky brain machine" }, 
      { resource_name: "Keyboard", resource_id: 2, resource_description: "Long type-y type machine" },
      { resource_name: "Mouse", resource_id: 3, resource_description: "Little clicky click machine" },
      { resource_name: "Coffee", resource_id: 4, resource_description: "Go-go juice" }, 
      { resource_name: "Brain", resource_id: 5, resource_description: "Mushy grey matter" }, 
      { resource_name: "Nails", resource_id: 6, resource_description: "Spiky boys" },
      { resource_name: "Hammer", resource_id: 7, resource_description: "Tough driver" }, 
      { resource_name: "Pencil", resource_id: 8, resource_description: "Mark'em up guy" }, 
    ]);
  };
  