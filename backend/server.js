const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors'); // ✅ Import cors
const BlogRouter = require('./routes/postRoutes.js');

dotenv.config();
const app = express();

const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI;

async function startServer() {
  try {
    // Connect to MongoDB Atlas
    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("MongoDB connected!");

    // ✅ Enable CORS (this must be before routes)
    app.use(cors());

    // Middleware
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));

    // Routes
    app.get("/", (req, res) => {
      res.send("Welcome to Mini Blog App's API");
    });

    app.use("/api/posts", BlogRouter);

    // Start Server
    app.listen(PORT, () => {
      console.log(`Server is running at http://localhost:${PORT}`);
    });

  } catch (error) {
    console.error("Error starting server:", error);
    process.exit(1);
  }
}

startServer();
