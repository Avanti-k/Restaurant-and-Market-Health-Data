const express = require('express');
const router = new express.Router();
const city = require('../controllers/city.js');
 
router.route('/city/:id?')
  .get(city.get);
 
module.exports = router;