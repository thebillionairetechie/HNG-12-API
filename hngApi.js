const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors({ credentials: true, origin: true }));
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.status(200).json({
    email: 'peaceamudipe@gmail.com',
    current_datetime: new Date(),
    github_url: 'https://github.com/thebillionairetechie/HNG-12-API'
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
});