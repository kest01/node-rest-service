const router = require('express').Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.json({ message: "Welcome to Node.js REST API application." });
});

module.exports = router;
