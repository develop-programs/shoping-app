import { Schema, models, model } from "mongoose";

const InformationSchema = new Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  phone: {
    type: String,
  },
  address: {
    type: String,
  },
  country: {
    type: String,
  },
  state: {
    type: String,
  },
  city: {
    type: String,
  },
  zip: {
    type: String,
  },
});

export const Information =
  models.Information || model("Information", InformationSchema);
