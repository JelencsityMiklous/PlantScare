const db = require('../utils/db');
const app = require('express').Router();

app.get('/', async (req, res) => {
  try {
    const plants = await db.query('SELECT * FROM plants');
    res.json(plants);
  } catch (error) {
    console.error('Error fetching plants:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});



app.get('/:id', async (req, res) => {
  const plantId = req.params.id;
  try {
    const plant = await db.query('SELECT * FROM plants WHERE id = ?', [plantId]);
    if (plant.length === 0) {
      return res.status(404).json({ error: 'Plant not found' });
    }
    res.json(plant[0]);
  } catch (error) {
    console.error('Error fetching plant:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});




app.post('/', async (req, res) => {
  const newPlant = req.body;
  try {
    const result = await db.query('INSERT INTO plants SET ?', newPlant);
    res.status(201).json({ id: result.insertId, ...newPlant });
  } catch (error) {
    console.error('Error adding plant:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.patch('/:id', async (req, res) => {
  const plantId = req.params.id;
  const updatedData = req.body;
  try {
    const result = await db.query('UPDATE plants SET ? WHERE id = ?', [updatedData, plantId]);
    if (result.affectedRows === 0) {
      return res.status(404).json({ error: 'Plant not found' });
    }
    res.json({ id: plantId, ...updatedData });
  } catch (error) {
    console.error('Error updating plant:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.delete('/:id', async (req, res) => {
  const plantId = req.params.id;
  try {
    const result = await db.query('DELETE FROM plants WHERE id = ?', [plantId]);
    if (result.affectedRows === 0) {
      return res.status(404).json({ error: 'Plant not found' });
    }
    res.status(204).send();
  } catch (error) {
    console.error('Error deleting plant:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = app;