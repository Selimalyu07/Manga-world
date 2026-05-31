import mongoose, { Schema, models } from "mongoose";

const ChapterSchema = new Schema(
  {
    mangaId: { type: Schema.Types.ObjectId, ref: "Manga", required: true },
    chapterNumber: { type: Number, required: true },
    title: { type: String, default: "" },
    images: [{ type: String }],
  },
  { timestamps: true }
);

const Chapter = models.Chapter || mongoose.model("Chapter", ChapterSchema);
export default Chapter;
