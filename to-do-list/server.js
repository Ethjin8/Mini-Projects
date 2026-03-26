const express = require('express');
const app = express();
app.use(express.json());
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World! Nice to meet you.')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})