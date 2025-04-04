import { v2 as cloudinary } from "cloudinary";
import productModel from "../models/productModel.js";

// function for adding product
const addProduct = async (req, res) => {
	try {
		const {
			name,
			description,
			price,
			category,
			subCategory,
			sizes,
			bestseller,
		} = req.body;

		const image1 = req.files.images1 && req.files.image1[0];
		const image2 = req.files.images2 && req.files.image2[0];
		const image3 = req.files.images3 && req.files.image3[0];
		const image4 = req.files.images4 && req.files.image4[0];

		const images = [image1, image2, image3, image4].filter(
			(item) => item !== undefined
		);

		let imagesUrl = await Promise.all(
			images.map(async (item) => {
				let result = await cloudinary.uploader.upload(item.path, {
					resource_type: "image",
				});
				return result.secure_url;
			})
		);

		const productData = {
			name,
			description,
			category,
			price: Number(price),
			subCategory,
			bestseller: bestseller === "true",
			sizes: JSON.parse(sizes),
			image: imagesUrl,
			date: Date.now(),
		};

		console.log(productData);
		const product = new productModel(productData);
		await product.save();

		res.json({ success: true, message: "Product Added" });

		console.log(imagesUrl);

		console.log({
			name,
			description,
			price,
			category,
			subCategory,
			sizes,
			bestseller,
		});
		console.log(images);

		res.json({});
	} catch (error) {
		console.log(error);
		res.json({ success: false, message: error.message });
	}
};

// function for listing products
const listProducts = async (req, res) => {
	try {
		res.json("list products");
	} catch (error) {
		console.log(error);
		res.json({ success: false, message: error.message });
	}
};

// function for removing products
const removeProduct = async (req, res) => {
	try {
		res.json("remove products");
	} catch (error) {
		console.log(error);
		res.json({ success: false, message: error.message });
	}
};

// function for single product info
const singleProduct = async (req, res) => {
	try {
		res.json("single products");
	} catch (error) {
		console.log(error);
		res.json({ success: false, message: error.message });
	}
};

export { listProducts, addProduct, removeProduct, singleProduct };
