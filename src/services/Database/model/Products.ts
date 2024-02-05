import { Schema, models, model } from "mongoose";

const ProductsSchema = new Schema({
  uuid: {
    type: String,
    unique: true,
  },
  name: {
    type: String,
  },
  price: {
    type: Number,
    default: 0,
  },
  description: {
    type: String,
  },
  category: {
    type: String,
  },
  rating: {
    type: Number,
    default: 0,
  },
  discount: {
    type: Number,
    default: 0,
  },
  image: {
    type: String,
  },
  brand: {
    type: String,
  },
  model: {
    type: String,
  },
  quantity: {
    type: Number,
  },
});

export const Products = models.Products || model("Products", ProductsSchema);
