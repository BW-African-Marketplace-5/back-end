const db = require('../database/dbConfig.js');

module.exports = {
  add,
  find,
  findBy,
  findById,
};

function find() {
  return db('products')
        .select('id', 'username', 'password');
}

function findBy(filter) {
  return db('products')
  .where(filter);
}

function findById(id) {
  return db('products')
    .where({ id })
    .first();
}

async function add(product) {
  const [id] = await db('products').insert(product);

  return findById(id);
}




