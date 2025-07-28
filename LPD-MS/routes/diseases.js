
const express = require('express');
const router = express.Router();
const diseases = require('../data/diseases.json');

router.get('/', (req, res) => {
  res.json(diseases);
});

module.exports = router;
