const db = require('../utils/db');
const app = require('express').Router();

app.get('/', async (req, res) => {
  try {
    const statistics = await db.query('SELECT * FROM statistics');
    res.json(statistics);
  } catch (error) {
    console.error('Error fetching statistics:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});


module.exports = app;