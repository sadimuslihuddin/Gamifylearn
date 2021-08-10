const express = require('express');
const cors = require('cors')
const app = express();

app.use(cors());

app.post('/login', (req, res) => {
  res.send(res.data);
});

app.listen(8080, () => console.log('API is running on http://localhost:8080'));