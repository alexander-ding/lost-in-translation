const express = require('express');
const app = express();
const cors = require('cors');
const apiRouter = require('./api');
const port = process.env.PORT || 4000;

app.use(cors({
  origin: 'https://alexander-ding.github.io'
}));
app.use(express.json());
app.use('/api', apiRouter);

app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
})