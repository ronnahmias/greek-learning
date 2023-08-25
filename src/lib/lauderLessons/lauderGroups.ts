import mongoose, { Schema, models } from "mongoose";
import { ELauderYear, ELauderYears } from "@lib/lauderLessons/lauderYearsEnum";

const lauderGroupsSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    year: {
      type: String,
      enum: Object.keys(ELauderYears) as ELauderYear[],
      required: true,
      default: ELauderYears["2022-2023"],
    },
  },
  { timestamps: true }
);

export const LauderGroups =
  models.LauderGroups || mongoose.model("lauder_groups", lauderGroupsSchema);
