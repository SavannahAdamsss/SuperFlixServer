exports.up = function(knex, Promise) {
    return knex.schema.createTable('favorites', (table) => {
      table.increments()
      table.integer('movie_id')
      table.text('title')
      table.text('image_URL')
    })
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('favorites')
  };
