import mongoose, { Schema, models } from "mongoose";
import { ELauderYear, ELauderYears } from "@lib/lauderLessons/lauderYearsEnum";
import { ILauderGroup } from "@lib/interfaces/lauderGroups";

const lauderGroupsSchema = new Schema<ILauderGroup>(
  {
    name: {
      type: String,
      required: true,
    },
    year: {
      type: String,
      enum: Object.keys(ELauderYears) as ELauderYear[],
      required: true,
      default: ELauderYears["2023-2024"],
    },
  },
  { timestamps: true }
);

export const LauderGroups =
  models.lauder_groups || mongoose.model("lauder_groups", lauderGroupsSchema);
