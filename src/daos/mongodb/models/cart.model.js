import { Schema, model } from "mongoose";

export const cartCollectionName = "carts";

const productInCartSchema = new Schema(
  {
    product: { type: Schema.Types.ObjectId, ref: "products" },
    quantity: Number,
  },
  { _id: false }
);

const cartSchema = new Schema({
  products: [productInCartSchema],
});

// cartSchema.pre("find", function () {
//   this.populate("products.product");
// });

export const CartModel = model(cartCollectionName, cartSchema);