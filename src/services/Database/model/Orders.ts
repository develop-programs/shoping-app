import { Schema, models, model } from "mongoose";
import { Payment } from "./Payment";

const OrdersSchema = new Schema({
  name: {
    type: String,
  },
  price: {
    type: String,
  },
  quantity: {
    type: Number,
  },
  paymentMode: [{ type: Schema.ObjectId, ref: Payment }],
});

export const Order = models.Orders || model("Orders", OrdersSchema);
