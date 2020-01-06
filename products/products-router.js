const router = require("express").Router();

const Products = require("./products-model.js");
const restricted = require('../auth/restricted_middleware.js');

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
        if(product){
            res
            .status(200)
            .json(product)
        } else {
            res
            .status(404)
            .json({ message: "The product with the specified id could not be found. Error on client end.", error})
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
            .json({ message: "A product list for the user with the specified id could not be found. Error on client end.", error})
        }
    })
    .catch(error => {
        res
        .status(500)
        .json({ message: "The server could not retrieve the user's product list. Error on server end.", error})
    })
})
  
router.post("/products", restricted, (req, res) => {
  let { category, market_area, name, description, price, user_id } = req.body
  
  Products.add(req.body)
  .then(savedProduct => {
    res
    .status(201)
    .json({...savedProduct, category, market_area, name, description, price, user_id })
})
.catch(error => {
  res
  .status(500)
  .json({ message: "The server was not able to create the product listing", error})
})
})


module.exports = router;