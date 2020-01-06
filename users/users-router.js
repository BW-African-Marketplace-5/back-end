const router = require("express").Router();

const Users = require("./users-model.js");
const restricted = require('../auth/restricted_middleware.js');

router.get("/users", (req, res) => {
  Users.find()
    .then(users => {
      res.json(users);
    })
    .catch(err => res.send(err));
});

router.get("/users/current", restricted, (req, res) => {
  Users.find()
    .then(user => {
      let tmp = req.user
      console.log(req.user)
      res.json({currentUsername: tmp.username, currentUserId: tmp.id});
    })
    .catch(err => res.send(err));
});

router.get("/users/:id", restricted, (req, res) => {
  const id = req.params.id
    Users.findById(id)
    .then(user => {
        if(user){
          res
          .status(200)
          .json(user)
        } else {
          res
          .status(404)
          .json({ message: "The user with the specified id could not be found."})
        }
    })
    .catch(error => {
        res
        .status(500)
        .json({ message: "The server could not retrieve the user. Error on server end.", error})
    })
})

module.exports = router;