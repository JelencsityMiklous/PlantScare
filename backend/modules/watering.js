const db = require('../utils/db');
const app = require('express').Router();

app.get('/', async (req, res) => {
  try {
    const waterings = await db.query('SELECT * FROM watering_logs');
    res.json(waterings);
  } catch (error) {
    console.error('Error fetching watering records:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.get('/:id', async (req, res) => {
  const wateringId = req.params.id;
  try {
    const waterings = await db.query('SELECT * FROM watering_logs WHERE id = ?', [wateringId]);
    res.json(waterings);
  } catch (error) {
    console.error('Error fetching watering records:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.post('/', async (req, res) => {
  const newWatering = req.body;
  try {
    const result = await db.query('INSERT INTO watering_logs SET ?', newWatering);
    res.status(201).json({ id: result.insertId, ...newWatering });
  } catch (error) {
    console.error('Error adding watering record:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.delete('/:id', async (req, res) => {
  const wateringId = req.params.id;
  try {
    const result = await db.query('DELETE FROM watering_logs WHERE id = ?', [wateringId]);
    if (result.affectedRows === 0) {
      return res.status(404).json({ error: 'Watering record not found' });
    }
    res.status(204).send();
  } catch (error) {
    console.error('Error deleting watering record:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});


module.exports = app;