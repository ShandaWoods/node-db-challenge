
exports.up = function(knex) {
    return knex.schema
    .createTable("resources", tbl => {
        tbl.increments();

        tbl.string("name", 128)
            .notNullable()
            .index()
            .inTable("Description");
    })

    .createTable("projects", tbl => {
        tbl.increments();

        tbl.string("name", 255)
            .notNullable()
            .index()
            .inTable("description");
    })

    .createTable("tasks", tbl => {
        tbl.increments();

        tbl.string("name", 4000)
            .notNullable()
            .index();

        tbl.integer("project_id")
            .unsigned()
            .notNullable()
            .references("id")
            .inTable("Description")
            .onDelete("RESTRICT") // what happens if the project with this id is deleted
            .onUpdate("CASCADE"); // what happens if the project id changes

        // CASCADE, SET NULL, DO NOTHING, RESTRICT
    });
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists("resources")
    .dropTableIfExists("projects")
    .dropTableIfExists("tasks");
};
