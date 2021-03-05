const db = require('../../data/dbConfig');

module.exports = {
    find,
    create,
    getItemLocations,
    update,
    remove
}

async function find(){
    return await db('items');
}

async function create(item){
    const [id] = await db('items').insert(item);
    return await db('items').where({ id }).first();
}

async function getItemLocations(id){
    return await db('item_locations as il').where("il.item_id",'=', id)
        .innerJoin('items as i','il.item_id', 'i.id')
        .innerJoin('locations as l','il.location_id','l.id')
        .select('i.item_name','i.item_description','l.location_name')
}

async function update(id, changes){
    return await db('items').where({ id }).update(changes);
}

async function remove(id){
    return await db('items').where({ id }).del();
}