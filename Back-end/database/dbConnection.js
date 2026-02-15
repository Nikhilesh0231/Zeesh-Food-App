import mongoose from "mongoose";

const dbConnection = () => {
  mongoose
    .connect(process.env.MONGO_URI, {
     dbName : "zeesh-food-app",
    })
    .then(() => {
      console.log("MongoDB connected successfully");  
    })
    .catch((err) => {
      console.error("MongoDB connection error:", err);
    });
};

export default dbConnection;