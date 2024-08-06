import express from 'express';
import bodyParser from 'body-parser';
import  jwt from 'jsonwebtoken'; 
const app = express();
const port = 3001;


app.use(bodyParser.json());

// Secret key for JWT
const SECRET_KEY = 'your_secret_key';


app.post('/auth/login', (req, res) => {
  const { email, password } = req.body;

  
  if (email === 'hi@b68.dev' && password === '12345678') {
   
    const token = jwt.sign({ email }, SECRET_KEY, { expiresIn: '1h' });

  
    res.status(200).json({ token });
  } else {
    res.status(401).json({ error: 'Invalid email or password' });
  }
});


app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
