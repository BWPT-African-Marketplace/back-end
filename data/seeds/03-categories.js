
exports.seed = function(knex, Promise) {
  return knex('categories').insert([   
    { id:1 ,category_name: 'Clothing'},
    {id:2, category_name: 'Electronics'},
    {id:3, category_name: 'Healthcare'}
  ]);
};
