import { Schema, models, model } from "mongoose";
import { Information } from "./Information";
import { Order } from "./Orders";

const UserSchema = new Schema({
  uuid: {
    type: String,
  },
  username: {
    type: String,
    default: "",
  },
  email: {
    type: String,
    default: "",
  },
  password: {
    type: String,
    default: "",
  },
  image: {
    type: String,
    default: "",
  },
  address: {
    type: String,
    default: "",
  },
  phone: {
    type: String,
  },
  Orders: [{ type: Schema.Types.ObjectId, ref: Order }],
  role: {
    type: String,
    default: "user",
  },
});

export const Users = models.Users || model("Users", UserSchema);
