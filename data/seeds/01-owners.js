
exports.seed = function(knex, Promise) {
  return knex('owners').insert([   
    { id:1 ,username: 'admin1', password:'admin1'},
    { id: 2, username: 'admin2', password:'admin2' },
    { id:3 ,username: 'admin3', password:'admin3'}
  ]);
};
