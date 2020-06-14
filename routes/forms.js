const forms = require('../controllers/form.controller')
const router = require('express').Router();

// Create a new Form
router.post("/", forms.create);

// Retrieve all Forms
router.get("/", forms.findAll);

module.exports = router;
