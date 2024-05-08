import mongoose from "mongoose";

export interface userInterface extends Document {
    username : string;
    email : string;
    fullname : string;
    avtar : string;
    coverimage ?: string;
    watchHistory ?: mongoose.Schema.Types.ObjectId;
    password : string;
    refreshTocken : string;
}

export interface videoInterface extends Document {
    videoFile : string;
    thumbnail : string;
    title : string;
    description : string;
    views : number;
    duration : number;
    isPublished : boolean;
    owner : mongoose.Schema.Types.ObjectId;
}