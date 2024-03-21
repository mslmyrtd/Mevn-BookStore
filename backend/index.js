import express from "express";
// import mongoose from "mongoose";
// import cors from "cors";
import booksRoute from "./routes/booksRoute.js";

import dotenv from "dotenv";
import connectDB from "./config.js";

const app = express();

dotenv.config();
// Middleware for handling CORS POLICY
//app.use(cors());

app.use(express.json());

app.use("/api/v1/books", booksRoute);
const port = 5000;
try {
  await connectDB();
  app.listen(port, () => {
    console.log(`App is listening to port: ${port}`);
  });
} catch (error) {
  process.exit(1);
}

// mongoose
//   .connect(mongoDBURL)
//   .then(() => {
//     console.log("App connected to database");
//     app.listen(PORT, () => {
//       console.log(`App is listening to port: ${PORT}`);
//     });
//   })
//   .catch((error) => {
//     console.log(error);
//   });
