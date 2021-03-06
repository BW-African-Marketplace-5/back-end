const router = require("express").Router();

const Products = require("./products-model.js");
const restricted = require('../auth/restricted_middleware.js');
const validateData = require('./productdata-validation.js')

router.get("/products", restricted, (req, res) => {
  Products.find()
    .then(products => {
      res.json(products);
    })
    .catch(err => res.send(err));
});

router.get("/products/:id", restricted, (req, res) => {
  const id = req.params.id

    Products.findById(id)
    .then(product => {
        console.log("product", product)
        if(product){
            res
            .status(200)
            .json(product)
        } else {
            res
            .status(404)
            .json({ message: "The product with the specified id could not be found. Error on client end."})
        }
    })
    .catch(error => {
        res
        .status(500)
        .json({ message: "The server could not retrieve the product. Error on server end.", error})
    })
})
  
router.get("/products/:id/user", (req, res) => {
    const id = req.params.id

    Products.findUserProductsById(id)
    .then(products => {
        if(products.length){
            res
            .status(200)
            .json(products)
        } else {
            res
            .status(404)
            .json({ message: "A product list for the user with the specified id could not be found. Error on client end."})
        }
    })
    .catch(error => {
        res
        .status(500)
        .json({ message: "The server could not retrieve the user's product list. Error on server end.", error})
    })
})
  
router.post("/:id/products", restricted, validateData, (req, res) => {
  
  const user_id = req.params.id
  const { category, market_area, name, description, price, image_url } = req.body
  
  Products.add({...req.body, user_id})
  .then(savedProduct => {
    res
    .status(201)
    .json({...savedProduct, category, market_area, name, description, price, user_id, image_url })
    })
    .catch(error => {
    res
    .status(500)
    .json({ message: "The server was not able to create the product listing", error})
    })
})

router.delete("/products/:id", (req, res) => {
    const id = req.params.id
  
    Products.findById(id)
      .then(product => {
      Products.remove(id)
        .then(removeProduct => {
          if(removeProduct) {
              res.status(200)
              .json({message: `The Product with ID number ${id} has been successfully removed.`, product })
          } else {
              res.status(404).json({ errorMessage: "The Product with the specified ID does not exist." })
          }
        })
      })
      .catch (error => {
          console.log("error on DELETE /products/:id", error);
          res
          .status(500)
          .json({ errorMessage: "The Product could not be removed." })
      });
    })

module.exports = router;