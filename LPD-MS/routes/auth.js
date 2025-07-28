
const express = require('express');
const router = express.Router();

router.post('/login', (req, res) => {
  const { phone } = req.body;
  res.json({ message: `Welcome ${phone}, login logic not implemented.` });
});

router.post('/register', (req, res) => {
  const { name } = req.body;
  res.json({ message: `Thanks ${name}, registration logic not implemented.` });
});

module.exports = router;
