import { ILauderLesson } from "@lib/interfaces/lauderLessons";
import mongoose, { Schema, models } from "mongoose";

const lauderLessonsSchema = new Schema<ILauderLesson>(
  {
    group: {
      type: Schema.Types.ObjectId,
      ref: "lauder_groups",
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
    startTime: {
      type: Date,
      required: true,
    },
    endTime: {
      type: Date,
      required: true,
    },
    hourPrice: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  { timestamps: true }
);

export const LauderLessons =
  models.lauder_lessons ||
  mongoose.model("lauder_lessons", lauderLessonsSchema);
