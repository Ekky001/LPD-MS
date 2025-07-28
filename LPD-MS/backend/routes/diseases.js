
const express = require('express');
const router = express.Router();
const diseases = require('../data/diseases.json');

router.get('/', (req, res) => {
  res.json(diseases);
});

router.get('/:animal', (req, res) => {
  const animal = req.params.animal.toLowerCase();
  const filtered = diseases.filter(d => d.animal.toLowerCase() === animal);
  res.json(filtered);
});

module.exports = router;
