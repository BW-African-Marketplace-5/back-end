
exports.up = function(knex) {
    return knex.schema.alterTable('products', products => {
         products
            .string('image_url', 1000)
            .defaultTo('No image available.')
      });  
};

exports.down = function(knex) {
  return knex.schema.alterTable('products', products => {
      products.dropColumn('image_url');
  });
};

//stretch -> give user ability to upload a photo
