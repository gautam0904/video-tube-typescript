import mongoose from "mongoose";

const videoSchema = new mongoose.Schema({})

export const Video = mongoose.model("video",videoSchema);