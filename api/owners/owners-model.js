const db = require('../../data/dbConfig');


module.exports = {
    find,
    findBy,
    findById,
    create,
    findOwnerItems,
}


async function find(){
    return await db('owners');
}

async function findBy(filter){
    return await db('owners').where( filter );
}

async function findById(id){
    return await db('owners').where({ id }).first()
}

async function create(newOwner){
    const [id] = await db('owners').insert(newOwner)
    return findById(id);
}

async function findOwnerItems(id){
    return await db('owners as o')  
        .join('items as i','o.id','i.owner_id')
        .select('i.item_name','i.item_description','i.price')
}