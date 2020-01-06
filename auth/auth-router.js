const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken"); 

const Users = require("../users/users-model.js");
const checkIfUserExists = require("../users/username-validation.js");
const validateUser = require("../users/userdata-validation.js");

router.post("/register", validateUser, checkIfUserExists, (req, res) => {
  let user = req.body;
  const hash = bcrypt.hashSync(user.password, 12); 
  user.password = hash;

  Users.add(user)
    .then(saved => {
      res.status(201).json(saved);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

router.post("/login", validateUser, (req, res) => {
  let { username, password } = req.body;

  Users.findBy({ username })
    .first()
    .then(user => {
      if (user && bcrypt.compareSync(password, user.password)) {
        // sign token
        const token = signToken(user); 

        // send the token
        res.status(200).json({
          message: `Welcome ${user.username}!`,
          token: token // added token as part of the response sent
        });
      } else {
        res.status(401).json({ message: "Error logging in, please check your username and password!", error });
      }
    })
    .catch(error => {
      res.status(500).json({ message: "Error on server end.", error});
    });
});



// this functions creates and signs the token
function signToken(user) {
  const payload = {
    username: user.username,
    id: user.id
  };

  const secret = process.env.JWT_SECRET || "The little boy jumped to see such fun, & the dish ran away with the spoon!";

  const options = {
    expiresIn: "1d",
  };

  return jwt.sign(payload, secret, options);
}

module.exports = router;
