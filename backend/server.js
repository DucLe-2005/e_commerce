import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDb from "./config/mongodb.js";

// App Config
const app = express();
const port = process.env.port || 4000;
connectDb()

// Middlewares
app.use(express.json());
app.use(cors()); // front end can connect to backend from any ip

// Api endpoints
app.get("/", (req, res) => {
	res.send("API Working");
});

app.listen(port, () => console.log("Server started on PORT: " + port));
