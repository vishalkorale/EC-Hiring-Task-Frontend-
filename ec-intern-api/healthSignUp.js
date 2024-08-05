import express from 'express';
import  bodyParser from 'body-parser'; // For parsing JSON request bodies
const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// In-memory storage for users
const users = [];

// Health Check Route
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'OK' });
});

// User Sign-Up Route
app.post('/auth/signup', (req, res) => {
  const { email, password } = req.body;

  // Simple validation
  if (!email || !password) {
    return res.status(400).json({ error: 'Email and password are required' });
  }

  // Check if user already exists
  const userExists = users.find(user => user.email === email);
  if (userExists) {
    return res.status(400).json({ error: 'User already exists' });
  }

  // Create new user
  users.push({ email, password });
  res.status(200).json({ data: { result: 'OK' } });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
