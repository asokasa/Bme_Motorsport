// models/Sponsor.js
import mongoose from "mongoose";

const SponsorSchema = new mongoose.Schema({
  link: String,
  type: String,
  path: String, // Cloudinary image URL
});

export default mongoose.model("Sponsor", SponsorSchema);