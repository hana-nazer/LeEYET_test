const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
const bcrypt = require("bcrypt");
const User = require("./models/userModel");

const app = express();

app.use(
  cors({
    credentials: process.env.CORS_CREDENTIALS === "true", // Whether to allow cookies to be sent along with the request
    origin: process.env.CORS_ORIGIN, // The origin(s) from which requests are allowed, specified as a string or an array of strings
  })
);
app.use(express.json());

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB database");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB database", err);
  });

app.post("/register", async (req, res) => {
  try {
    const { name, password, address } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const newUser = new User({
      name,
      password: hashedPassword,
      address,
    });

    // Save the user to the database
    await newUser.save();

    res.status(201).json({ success: true, message: "User registered successfully" });
  } catch (error) {
    console.error("Error registering user:", error);
    res.status(500).json({ success: false, message: "Error registering user" });
  }
});

app.put("/users/:id", async (req, res) => {
  try {
    const { name, address, password } = req.body;
    const { id } = req.params;

    // Find the user by ID
    const user = await User.findById(id);

    if (!user) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    // Update user information
    user.name = name;
    user.address = address;

    // Check if the password needs to be updated
    if (password) {
      const hashedPassword = await bcrypt.hash(password, 10);
      user.password = hashedPassword;
    }

    // Save the updated user to the database
    await user.save();

    res.status(200).json({ success: true, message: "User updated successfully" });
  } catch (error) {
    console.error("Error updating user:", error);
    res.status(500).json({ success: false, message: "Error updating user" });
  }
});

// Start the server
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
