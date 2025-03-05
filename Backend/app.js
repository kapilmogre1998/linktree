const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoute');
const mobilePreviewRoute = require('./routes/mobilePreviewRoute');
const clickTrackingRoute = require('./routes/clicktrackingRoute');
const cors = require('cors');
const device = require('express-device'); 

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

app.use(device.capture()); // This will automatically capture the device type and add it to `req.device`

app.use(express.json()); // For parsing JSON bodies

// Increase payload limit for JSON requests 
// app.use(bodyParser.json({ limit: '10mb' }));

// Increase payload limit for URL-encoded requests
// app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }));

app.use(bodyParser.json());

app.use('/api', userRoutes)

app.use('/api', clickTrackingRoute)

app.use('/api', mobilePreviewRoute)

module.exports = app;