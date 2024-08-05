import express from 'express';
import bodyParser from 'body-parser';
import  jwt from 'jsonwebtoken'; 
const app = express();
const port = 3001;

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Secret key for JWT
const SECRET_KEY = 'your_secret_key';

// User Login Route
app.post('/auth/login', (req, res) => {
  const { email, password } = req.body;

  // Example logic for user authentication
  // In a real application, you should verify the email and password with your database
  if (email === 'hi@b68.dev' && password === '12345678') {
    // Generate a token
    const token = jwt.sign({ email }, SECRET_KEY, { expiresIn: '1h' });

    // Send response with the token
    res.status(200).json({ token });
  } else {
    res.status(401).json({ error: 'Invalid email or password' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
