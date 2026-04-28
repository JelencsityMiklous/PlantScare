const cors = require('cors');
const mysql = require('mysql');
const express = require('express');
const plantsRoutes = require('./modules/plants');
const statisticsRoutes = require('./modules/statistics');
const wateringRoutes = require('./modules/watering');

const app = express();
app.use(cors());
app.use(express.json());


app.use('/plants', plantsRoutes);
app.use('/statistics', statisticsRoutes);
app.use('/:id/waterings', wateringRoutes);

app.use('/', (req, res) => {
    res.send('Welcome to the PlantScare API');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
