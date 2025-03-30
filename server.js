const express = require("express");
const cors = require("cors");
const path = require("path");
require("dotenv").config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Redirect login/signup routes to the React app
app.get("/login", (req, res) => {
  res.redirect("http://localhost:3001?action=signin");
});

app.get("/signup", (req, res) => {
  res.redirect("http://localhost:3001?action=signup");
});

// Serve static files AFTER route handlers
app.use(express.static(__dirname));

// Basic Routes
app.get("/api/health", (req, res) => {
  res.json({ status: "ok" });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Something went wrong!" });
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
