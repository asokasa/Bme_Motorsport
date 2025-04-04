// models/GalleryEvent.js
import mongoose from "mongoose";

const GalleryEventSchema = new mongoose.Schema({
  title: String,
  paths: [String], // Array of Cloudinary image URLs
});

export default mongoose.model("GalleryEvent", GalleryEventSchema);