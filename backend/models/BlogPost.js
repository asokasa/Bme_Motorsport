// models/BlogPost.js
import mongoose from "mongoose";

const BlogPostSchema = new mongoose.Schema({
  title: String,
  date: String,
  path: String, // Cloudinary image URL
  textFile: String, // Cloudinary text file URL
});

export default mongoose.model("BlogPost", BlogPostSchema);