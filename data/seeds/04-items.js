
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('items').del()
    .then(function () {
      // Inserts seed entries
      return knex('items').insert([
        {id: 1, item_name: 'tanktop',item_description: 'description for shirts',price: 10,owner_id: 3,location_id:2,category_id:1},
        {id: 2, item_name:'boombox',item_description: 'box boom',price: 3000,owner_id: 2,location_id:1,category_id:2},
        {id: 3, item_name:'anti-histamine',item_description: 'allergy pills',price: 20 ,owner_id: 2,location_id:1,category_id:1}
      ]);
    });
};
