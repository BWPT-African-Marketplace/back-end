
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
      tbl.integer('owner_id').unsigned().notNullable().references('owners.id').onDelete('CASCADE').onUpdate('CASCADE');
  })
  .createTable('locations',tbl =>{
      tbl.increments();
      tbl.string('location_name',128);
  })
  .createTable('prices', tbl=>{
      tbl.integer('item_id').unsigned().notNullable().references('items.id').onDelete('CASCADE').onUpdate('CASCADE');
      tbl.integer('location_id').unsigned().notNullable().references('locations.id').onDelete('CASCADE').onUpdate('CASCADE');
      tbl.float('price');
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('prices').dropTableIfExists('locations').dropTableIfExists('items').dropTableIfExists('owners')
};