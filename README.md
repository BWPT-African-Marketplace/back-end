#back-end 


## API DOCUMENTATION

// Register API 

// .post('https://african-marketplace-oz.herokuapp.com/api/register')

/* body {
    username: username,
    password: password
} */

//status code
//200 successful
// 400 username and password required
//500 system error 


//login API 
//.post('https://african-marketplace-oz.herokuapp.com/api/login')

/* body{
    username:username,
    password:password
} */

//status code
//200 successful
// 400 username and password required
// 401 invalid credentials
//500 system error 

// Items API 

//.get('/https://african-marketplace-oz.herokuapp.com/api/items')
    // 200 successful 
    // 500 system error

//.get('https://african-marketplace-oz.herokuapp.com/api/items/:id')
    //200 successful
    //400 id not found
    // 500 system error

// .post(https://african-marketplace-oz.herokuapp.com/api/items')
// body - 'item_name', 'owner_id', 'location_id','catergory_id' reqiored
    //201 successful created
    //401 please ensure all required fields have a value
    // 500 system error

//.put(https://african-marketplace-oz.herokuapp.com/api/items/:id)
    //200 successfully updated
    //404 id not found
    //500 system error

## Web Unit 4 - Node Rubric 

Objectives

1. Use Express' built-in router to build and test a modular server API with Postman.
2. Implement authentication & custom middleware
3. Use a RDBMS from an API
4. Create an authentication workflow using sessions or JSON with web tokens
5. Write tests for backend endpoints (the end point returns appropriate data) based on input
6. Use SQL to create and query a local database, table schemas, configure scripted schema migrations & seed scripts.

## ☝️**Pitch**

Sauti Africa empowers small business owners, particularly women, to improve their business and economic opportunities to grow out of poverty. 

You will build a platform to enable these business owners to create listing for items they have for sale.

✅ MVP
1. A small business `owner` can login and see relevant prices in various categories to help them set their own prices.

2. They can also make listing for `items` they want to sell, which will show up to all `users`.

3. They add a new `item` by selecting their market `location` and typing in their item's `name`, `description`, and `price`.

## 🏃‍♀️**Stretch**

**WEB:** 

1. Business `owner`s can upload their `picture` to their profile

## 📦 Additional Resources

**Proof of concept:**

[http://sautiafrica.org/](http://sautiafrica.org/)

**Example product reference list:** [https://docs.google.com/spreadsheets/d/1cbJQL1JbO5pAV4mss1yH0uMp58lF8TkKZt6NPkF9NLg/edit#gid=0](https://docs.google.com/spreadsheets/d/1cbJQL1JbO5pAV4mss1yH0uMp58lF8TkKZt6NPkF9NLg/edit#gid=0)