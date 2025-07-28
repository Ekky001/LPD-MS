
const express = require('express');
const router = express.Router();
const vets = require('../data/vets.json');

router.get('/', (req, res) => {
  res.json(vets);
});

module.exports = router;
