const express = require('express');
const app = express();
const port = 8080;

// Root endpoint
app.get('/', (req, res) => {
  res.send('Welcome from your simple node app! \n\n How are you doing, ' + process.env.YOUR_NAME + '?');
});

// Users endpoint
app.get('/users', (req, res) => {
  res.json([
    { name: 'User1', id: 1 },
    { name: 'User2', id: 2 }
  ]);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
