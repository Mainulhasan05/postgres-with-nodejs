const express = require("express");
const userRoutes = require("./routes/userRoutes");
require("dotenv").config();

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use("/users", userRoutes);

// Error Handling Middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Internal Server Error" });
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
