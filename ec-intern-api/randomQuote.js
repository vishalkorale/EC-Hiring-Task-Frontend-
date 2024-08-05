import express from 'express';
const app = express();
const port = 3002; // Use a different port if needed

// Sample quotes
const quotes = [
  { quote: "But Men Are Men; The Best Sometimes Forget.", author: "William Shakespeare" },
  { quote: "To be, or not to be, that is the question.", author: "William Shakespeare" },
  { quote: "I think, therefore I am.", author: "René Descartes" },
  { quote: "The only thing we have to fear is fear itself.", author: "Franklin D. Roosevelt" },
  // Add more quotes as needed
];

// Get a random quote
app.get('/api/quote', (req, res) => {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];
  res.status(200).json(randomQuote);
});

app.listen(port, () => {
  console.log(`Quote API is running on http://localhost:${port}`);
});
