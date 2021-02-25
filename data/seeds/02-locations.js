
exports.seed = function(knex, Promise) {
  return knex('locations').insert([   
    { id:1 ,location_name: 'Kenya'},
    {id:2, location_name: 'Dubai'},
    {id:3, location_name: 'Cairo'}
  ]);
};
