const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Add body-parser middleware to parse JSON data
app.use(bodyParser.json());

app.post('/send-message', (req, res) => {
  const { name, message } = req.body;
  // Send the message using your preferred method (e.g. email, SMS, etc.)
  console.log(`Received message from ${name}: ${message}`);
  res.send(`Thank you, ${name}! Your message has been sent.`);
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});