const express = require('express');
const app = express();
const apiRouter = require('./api');
const port = process.env.PORT || 4000;

app.use(express.json());
app.use('/api', apiRouter);

app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
})