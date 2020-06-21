const config = require("../auth.config");
const jwt = require("jsonwebtoken");

exports.login = (req, res) => {
    if (req.body.username === 'admin' && req.body.password === 'admin') {
        const token = jwt.sign({ id: 1 }, config.secret, {
            expiresIn: 86400 // 24 hours
        });

        res.status(200).send({
            id: 1,
            username: 'admin',
            email: 'admin@test.com',
            roles: ["ROLE_USER", "ROLE_ADMIN"],
            accessToken: token
        });
    } else {
        if (req.body.username !== 'admin') {
            return res.status(404).send({ message: "User Not found." });
        } else {
            return res.status(401).send({
                accessToken: null,
                message: "Invalid Password!"
            });
        }
    }
};