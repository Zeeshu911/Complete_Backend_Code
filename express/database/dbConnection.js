import mongoose from "mongoose";

export const dbConnection = () => {
  mongoose
    .connect(
      process.env.MONGO_URI,
      {
        dbName: "Backend_Tutorial",
      }
    )
    .then(() => {
      console.log("Successfully Connected To Database.");
    })
    .catch((err) => {
      console.log(`Some error occured while connecting to database: ${err}`);
    });
};
