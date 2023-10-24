import {model, models, Schema} from "mongoose";
import UserModel from "@/server/models/user.model";

export const postSchema = new Schema({
    content: String,
    user: UserModel
}, { timestamps: true })

const postModel = models.Post || model('Post', postSchema)
export default postModel