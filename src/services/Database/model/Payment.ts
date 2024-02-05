import { Schema, models, model } from "mongoose";

const PaymentSchema = new Schema({
  method: {
    type: String,
  },
  status: {
    type: Boolean,
  },
  amount: {
    type: String,
  },
});

export const Payment = models.Payment || model("Payment", PaymentSchema);
