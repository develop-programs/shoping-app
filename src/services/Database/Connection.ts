import mongoose from "mongoose";

export default async function Connection() {
  await mongoose
    .connect(
      process.env.DATABASE_URL
        ? process.env.DATABASE_URL
        : "mongodb://localhost:27017/Shoping"
    )
    .then(() => console.log("Connection to MongoDB established"))
    .catch((err) => console.log(err));
}
