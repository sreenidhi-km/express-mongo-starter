const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(express.json());

// ✅ Fix for CORS / access denied
app.use(cors({
  origin: ["curl http://localhost:5000/", "http://127.0.0.1:3000", "*"],
  credentials: true,
}));

const User = require("./models/User");

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB connection attempt finished"))
  .catch(err => console.error("❌ DB Connection Error (initial):", err));

const db = mongoose.connection;
db.on('connected', () => console.log('✅ Mongoose connected to DB'));
db.on('error', err => console.error('❌ Mongoose connection error:', err));
db.on('disconnected', () => console.warn('⚠️ Mongoose disconnected'));

app.get("/", (req, res) => {
  console.log("✅ GET / route hit");
  res.status(200).send("Server is running 🚀");
});

// Health check for DB
app.get('/health', (req, res) => {
  const state = mongoose.connection.readyState; // 0 = disconnected, 1 = connected
  res.json({ ok: state === 1, readyState: state });
});

app.post("/register", async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const user = new User({ username, email, password });
    await user.save();
    res.status(201).json({ message: "User registered successfully!" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Registration failed" });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));