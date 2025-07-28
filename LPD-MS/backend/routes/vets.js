
const express = require('express');
const router = express.Router();
const vets = require('../data/vets.json');

router.get('/', (req, res) => {
  const { county, animal, emergency } = req.query;
  let result = [];

  if (county && vets[county.toLowerCase()]) {
    result = vets[county.toLowerCase()];
    if (animal) {
      result = result.filter(v => v.animal === animal);
    }
    if (emergency === 'true') {
      result = result.filter(v => v.emergency === true);
    }
  }

  res.json(result);
});

module.exports = router;
