
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 3000;

const diseasesRoutes = require('./routes/diseases');
const vetsRoutes = require('./routes/vets');
const authRoutes = require('./routes/auth');

app.use(cors());
app.use(bodyParser.json());
app.use(express.static('public'));

app.use('/api/diseases', diseasesRoutes);
app.use('/api/vets', vetsRoutes);
app.use('/api/auth', authRoutes);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
