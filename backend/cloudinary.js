import { v2 as cloudinary } from "cloudinary";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.resolve("../.env") });

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_KEY,
  api_secret: process.env.CLOUD_SECRET,
});

export const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "bme_motorsport_uploads",
    allowed_formats: ["jpg", "jpeg", "png", "webp"],
  },
});

export { cloudinary };