const jwt = require("jsonwebtoken");
const config = require("../auth.config.js");

verifyToken = (req, res, next) => {
    let token = req.headers["x-access-token"];

    if (!token) {
        return res.status(403).send({
            message: "No token provided!"
        });
    }

    jwt.verify(token, config.secret, (err, decoded) => {
        if (err) {
            return res.status(401).send({
                message: "Unauthorized!"
            });
        }
        req.userId = decoded.id;
        next();
    });
};

isAdmin = (req, res, next) => {
    console.log('isAdmin request', req)
    if (req.userId === 1) {
        next();
        return;
    }
    res.status(403).send({
        message: "Require Admin Role!"
    });
};


const authJwt = {
    verifyToken: verifyToken,
    isAdmin: isAdmin,
};
module.exports = authJwt;