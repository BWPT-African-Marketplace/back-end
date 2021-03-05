const Items = require('./items-model')

const db = require('../../data/dbConfig');

beforeAll(async ()=>{
    await db.migrate.rollback();
    await db.migrate.latest();
})

beforeEach(async ()=>{
    await db('items').truncate()
})

afterAll(async ()=>{
    await db.destroy();
})

describe('items model', ()=>{
    describe('create()', ()=>{
        test('inserts the provided items',async ()=>{
            await Items.create({'item_name': "my test item",'category_id':3,'location_id':2,"owner_id":1})
            const items = await db('items')
            expect(items).toHaveLength(1);
        })
    })
})

describe('remove()',()=>{
    test('removes the provided id', async()=>{
        await Items.remove(1)
        const items = await db('items');
        expect(items).toHaveLength(0);
    })
    test('no removal with invalid id', async()=>{
        //id = 1;
        await Items.create({'item_name': "my test item",'category_id':3,'location_id':2,"owner_id":1})
        await Items.remove(10);
        const items = await db('items');
        expect(items).toHaveLength(1)
    })
})
