//validate presence of required data
module.exports = function validateProductData(req, res, next) {
    if (!req.body) {
      res.status(400).json({ errorMessage: "Missing product data" });
    } else if (!req.body.category.length || !req.body.market_area || !req.body.name || !req.body.description || !req.body.price){
      res.status(400).json({ errorMessage: "Please provide an object with the following keys {category:'', market_area:'', name: '', description: '', price '' }" });
    } else{
      next();
    }
};