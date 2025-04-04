// models/Alumni.js
import mongoose from "mongoose";

const AlumniSchema = new mongoose.Schema({
  name: String,
  path: String, // Cloudinary image URL
});

export default mongoose.model("Alumni", AlumniSchema);