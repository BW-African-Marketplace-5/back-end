const db = require("../data/dbConfig.js");

module.exports = {
  add,
  find,
  findBy,
  findById,
  findUserProductsById,
  remove
};

function find() {
  return db("products as p")
        .select("p.id", "p.category", "p.market_area", "p.name", "p.description", "p.price", "u.username",  "p.user_id", "p.image_url")
        .join("users as u", "p.user_id", "u.id")
}

function findBy(filter) {
  return db("products")
  .where(filter);
}

function findById(id) {
  return db("products")
    .where({ id })
    .first();
}

async function add(product) {
  const [id] = await db("products").insert(product, "id");

  return findById(id);
}

function findUserProductsById(id){
  return db("products as p")
  .select("u.username", "p.user_id", "p.id as product_id", "p.category", "p.market_area", "p.name", "p.description", "p.price", "p.image_url")
  .join("users as u", "p.user_id", "u.id")
  .where("user_id", id)
}

function remove(id){
  return db('products')
  .where({ id })
  .del();
}


