import * as Mongoose from "mongoose";

export interface IVendor extends Mongoose.Document {
  name: string;
  contact_info: String;
  services: String;
  createdAt: Date;
  updateAt: Date;
}

export const VendorSchema = new Mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    contact_info: String,
    services: String,
  },
  {
    timestamps: true
  }
);

export const VendorModel = Mongoose.model<IVendor>("Vendor", VendorSchema);
