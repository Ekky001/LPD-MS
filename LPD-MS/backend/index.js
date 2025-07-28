
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const diseasesRoutes = require('./routes/diseases');
const vetsRoutes = require('./routes/vets');
const authRoutes = require('./routes/auth');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

app.use('/api/diseases', diseasesRoutes);
app.use('/api/vets', vetsRoutes);
app.use('/api/auth', authRoutes);

app.get('/', (req, res) => {
  res.send('✅ LPD Management Backend is running!');
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
