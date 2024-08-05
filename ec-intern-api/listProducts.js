import express from 'express';
import path  from 'path';
import  fs from 'fs';
const app = express();
const port = 3001;


app.get('/api/products', (req, res) => {

  const filePath = path.join(__dirname, '..', 'public', 'product.json');
  console.log('File path:', filePath); 

  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading products file:', err);
      return res.status(500).json({ error: 'Failed to load products' });
    }

    res.status(200).json(JSON.parse(data));
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
