
exports.up = function(knex) {
  return knex.schema.createTable('owners', tbl =>{
      tbl.increments();
      tbl.string('username',128).unique().notNullable();
      tbl.string('password',128).notNullable();
  })
  .createTable('locations',tbl =>{
    tbl.increments();
    tbl.string('location_name',128);
  })
  .createTable('categories',tbl=>{
    tbl.increments();
    tbl.string('category_name',128);
  })
  .createTable('items', tbl => {
      tbl.increments();
      tbl.string('item_name',128);
      tbl.string('item_description',256);
      tbl.float('price');
      tbl.integer('owner_id').unsigned().notNullable().references('owners.id').onDelete('CASCADE').onUpdate('CASCADE');
      tbl.integer('location_id').unsigned().notNullable().references('locations.id').onDelete('CASCADE').onUpdate('CASCADE');
      tbl.integer('category_id').unsigned().notNullable().references('categories.id').onDelete('CASCADE').onUpdate('CASCADE');
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('items').dropTableIfExists('locations').dropTableIfExists('categories').dropTableIfExists('owners')
};
