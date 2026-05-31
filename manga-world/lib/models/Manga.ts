import mongoose, { Schema, models } from "mongoose";

const MangaSchema = new Schema(
  {
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    description: { type: String, required: true },
    coverImage: { type: String, required: true },
    bannerImage: { type: String, default: "" },
    type: {
      type: String,
      enum: ["manga", "manhwa", "webtoon", "novel"],
      required: true,
    },
    status: {
      type: String,
      enum: ["ongoing", "completed", "hiatus"],
      default: "ongoing",
    },
    genres: [{ type: String }],
    author: { type: String, required: true },
    artist: { type: String, default: "" },
    rating: { type: Number, default: 0 },
    views: { type: Number, default: 0 },
  },
  { timestamps: true }
);

const Manga = models.Manga || mongoose.model("Manga", MangaSchema);
export default Manga;
