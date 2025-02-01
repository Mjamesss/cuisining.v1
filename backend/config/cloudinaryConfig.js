const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const multer = require("multer");

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Configure Multer Storage for Cloudinary
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "avatars", // Folder in Cloudinary
    format: "png", // Convert all uploads to PNG
    public_id: (req, file) => `${Date.now()}-${file.originalname}`, // Unique file name
  },
});

const upload = multer({ storage });

module.exports = { cloudinary, upload }; // Export cloudinary