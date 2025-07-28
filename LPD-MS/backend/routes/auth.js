
const express = require('express');
const router = express.Router();

router.post('/login', (req, res) => {
  const { phone, password } = req.body;
  if (!phone || !password) {
    return res.status(400).json({ error: 'Phone and password required' });
  }
  res.json({ message: `Welcome ${phone}, login logic not implemented.` });
});

router.post('/register', (req, res) => {
  const { name, phone, password } = req.body;
  if (!name || !phone || !password) {
    return res.status(400).json({ error: 'Name, phone, and password required' });
  }
  res.json({ message: `Thanks ${name}, registration logic not implemented.` });
});

module.exports = router;
