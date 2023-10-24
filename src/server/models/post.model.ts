import {model, models, Schema} from "mongoose";
import {userSchema} from "@/server/models/user.model";

export const postSchema = new Schema({
    content: String,
    user: {
        type: userSchema,
        required: false
    }
}, { timestamps: true })

const postModel = models.Post || model('Post', postSchema)
export default postModel