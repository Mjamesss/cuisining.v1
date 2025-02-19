const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary"); //yung required then yung equal
const multer = require("multer");

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET, //tinangaal yung secrete key
});

// Configure Multer Storage for Cloudinary
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: { //params pati curly braces
    folder: "avatars", // Folder in Cloudinary
    format: "png", // Convert all uploads to PNG
    public_id: (req, file) => `${Date.now()}-${file.originalname}`, // Unique file name yung `
  },
});

const upload = multer({
  storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // Set limit to 5MB (in bytes)
});


module.exports = { cloudinary, upload }; // Export cloudinary