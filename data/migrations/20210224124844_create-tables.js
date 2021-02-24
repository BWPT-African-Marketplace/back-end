
exports.up = function(knex) {
  return knex.schema.createTable('owners', tbl =>{
      tbl.increments();
      tbl.string('username',128).notNullable().unique();
      tbl.string('password',128).notNullable();
  })
  .createTable('items', tbl => {
      tbl.increments();
      tbl.string('item_name',128);
      tbl.string('item_description',256);
      tbl.float('price');
      tbl.integer('owner_id').unsigned().notNullable().references('owners.id').onDelete('CASCADE').onUpdate('CASCADE');
  })
  .createTable('locations',tbl =>{
      tbl.increments();
      tbl.string('location_name',128);
  })
  .createTable('item_locations',tbl =>{
    tbl.increments();
    tbl.integer('location_id').unsigned().notNullable().references('locations.id').onDelete('CASCADE').onUpdate('CASCADE');
    tbl.integer('item_id').unsigned().notNullable().references('items.id').onDelete('CASCADE').onUpdate('CASCADE');
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('item_locations').dropTableIfExists('locations').dropTableIfExists('items').dropTableIfExists('owners')
};
