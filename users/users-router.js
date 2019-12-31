const router = require("express").Router();

const Users = require("./users-model.js");

router.get("/users", (req, res) => {
  Users.find()
    .then(users => {
      res.json(users);
    })
    .catch(err => res.send(err));
});

router.get("/users/:id", (req, res) => {
  const id = req.params.id

    Users.getById(id)
    .then(user => {
        if(user){
            res
            .status(200)
            .json(lady)
        } else {
            res
            .status(404)
            .json({ message: "The user with the specified id could not be found. Error on client end.", error})
        }
    })
    .catch(error => {
        res
        .status(500)
        .json({ message: "The server could not retrieve the user. Error on server end.", error})
    })
})
  

module.exports = router;