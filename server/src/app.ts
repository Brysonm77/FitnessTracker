import * as dotenv from 'dotenv';

import express from 'express';

dotenv.config();

const DB_URI = process.env.MONGO_URL || '';
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware needed
app.use(express.json()); // Parse JSON request bodies

// Routes needed
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

//
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
