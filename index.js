const express = require('express');
const session = require('express-session');


const hostname = '127.0.0.1';
const port = 3000;
const cors = require('cors'); 


const app = express();

const connectDB = require('./db'); 


connectDB();  // Establish the MongoDB connection


// Define the allowed origins
const allowedOrigins = ['http://127.0.0.1:5500', '']; // ADD your github pages link if using

// CORS configuration
const corsOptions = {
  origin: (origin, callback) => {
    if (allowedOrigins.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'), false);
    }
  },
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type', 'Authorization'],
};

app.use(cors(corsOptions));
app.use(express.json());


// Import routers from routes
const leaderBoardRoute = require('./routes/leaderboard.js');

app.use('/api',leaderBoardRoute); // change api to whatever you want!

// Simple /api/hello which returns hello world
app.get('/api/hello', (req, res) => {
  res.status(200).send('Hello, World!\n');
});

// Handle 404 errors (UNKNOWN page)
app.use((req, res) => {
  res.status(404).send('Not Found\n');
});


app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
