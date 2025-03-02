const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoute');
const mobilePreviewRoute = require('./routes/mobilePreviewRoute');
const cors = require('cors');

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  res.header('Access-Control-Allow-Credentials', 'true');

  if (req.method === 'OPTIONS') {
    res.sendStatus(200);
  } else {
    next();
  }
})

// Increase payload limit for JSON requests 
app.use(bodyParser.json({ limit: '10mb' }));

// Increase payload limit for URL-encoded requests
app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }));

app.use(bodyParser.json());

app.use('/api', userRoutes)

app.use('/api', mobilePreviewRoute)

module.exports = app;