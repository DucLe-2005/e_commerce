import {v2 as cloudinary} from "cloudinary"

const connectCloudinary = async () => {
    cloudinary.config({
        cloudinary_name: process.env.CLOUDINARY_NAME,
        api_key: process.env.CLOUDINARY_API_KEY,
        api_secret_key: process.env.CLOUDINARY_SECRET_KEY
    })
}

export default connectCloudinary;