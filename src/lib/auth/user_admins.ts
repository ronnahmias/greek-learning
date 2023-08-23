import mongoose, { Schema, models } from "mongoose";
import { connectMongoDB } from "../mongodb/mongodb";

const userAdminSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const UserAdmins =
  models.user_admins || mongoose.model("user_admins", userAdminSchema);

export async function checkUserAdmin(email: string) {
  await connectMongoDB();
  const adminExists = await UserAdmins.findOne({ email: email });
  return adminExists;
}
