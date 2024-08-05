import express from 'express';
const app = express();
const port = 3001;

// Middleware to simulate authentication
app.use((req, res, next) => {
  // Mock user data
  req.user = {
    sub: 'hi@b68.dev',
    exp: 1722387952395,
    iat: 1722384352
  };
  next();
});

// Route to get the current user
app.get('/api/me', (req, res) => {
  // In a real application, you would get user info from the database
  if (req.user) {
    res.status(200).json({ user: req.user });
  } else {
    res.status(401).json({ error: 'Unauthorized' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
