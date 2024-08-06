import express from "express";
import bodyParser from "body-parser";
const app = express();
const port = 3000;

app.use(bodyParser.json());

const users = [];

app.get("/health", (req, res) => {
  res.status(200).json({ status: "OK" });
});

app.post("/auth/signup", (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: "Email and password are required" });
  }

  const userExists = users.find((user) => user.email === email);
  if (userExists) {
    return res.status(400).json({ error: "User already exists" });
  }

  users.push({ email, password });
  res.status(200).json({ data: { result: "OK" } });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
