
exports.up = function(knex) {
    return knex.schema.table('products', products => {
         products
            .string('image_url', 1000)
      });  
};

exports.down = function(knex) {
  return knex.schema.table('products', products => {
      products.dropColumn('image_url');
  });
};

//stretch -> give user ability to upload a photo
