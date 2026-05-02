require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());

//  Routes
const contactRouter = require("./routes/contactRoutes");

//  Database Connetction
const connectDB = require("./config/db");
connectDB();

// Getting form data's middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api/contact", contactRouter);

app.listen(PORT, () => {
  console.log("Server is running");
});
