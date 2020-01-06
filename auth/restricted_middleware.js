const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    const token = req.headers.authorization;

    if (token) {
        const secret = process.env.JWT_SECRET || "The little boy jumped to see such fun, & the dish ran away with the spoon!";

        jwt.verify(token, secret, function(err, decodedToken) {
            if (err) {
                res
                .status(401)
                .json({ message: "You shall not pass! Client Error", err})
            } else {
                req.user = decodedToken
                console.log(req.user)
                next();
            }
        });
    } else {
        res
        .status(400)
        .json({ message: "No token provided."})
    }
};