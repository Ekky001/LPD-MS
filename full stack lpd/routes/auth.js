
const express = require('express');
const router = express.Router();
const pool = require('../db');

router.post('/register', async (req, res) => {
  const { name, phone, password } = req.body;
  try {
    await pool.query(
      'INSERT INTO users (name, phone, password) VALUES ($1, $2, $3)',
      [name, phone, password]
    );
    res.json({ message: `Thanks ${name}, you are registered.` });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Registration failed' });
  }
});

router.post('/login', async (req, res) => {
  const { phone, password } = req.body;
  try {
    const result = await pool.query(
      'SELECT * FROM users WHERE phone = $1 AND password = $2',
      [phone, password]
    );
    if (result.rows.length > 0) {
      res.json({ message: `Welcome back, ${result.rows[0].name}` });
    } else {
      res.status(401).json({ error: 'Invalid credentials' });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Login failed' });
  }
});

module.exports = router;
