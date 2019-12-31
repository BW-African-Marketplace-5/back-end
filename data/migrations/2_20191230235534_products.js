
exports.up = function(knex) {
 return knex.schema.createTable('products', products => {
    
    products.increments();

    products
        .string('category', 128)
        .notNullable();

    products
        .string('market_area', 128)
        .notNullable();

    products
        .string('name', 128)
        .notNullable();

    products
        .string('description', 300)

    products
        .string('price', 128)
        .notNullable();

    products
        .integer('user_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('users')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('products');
};