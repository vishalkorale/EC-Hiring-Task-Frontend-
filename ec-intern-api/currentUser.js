import express from 'express';
const app = express();
const port = 3001;


app.use((req, res, next) => {
  
  req.user = {
    sub: 'hi@b68.dev',
    exp: 1722387952395,
    iat: 1722384352
  };
  next();
});


app.get('/api/me', (req, res) => {
 
  if (req.user) {
    res.status(200).json({ user: req.user });
  } else {
    res.status(401).json({ error: 'Unauthorized' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
