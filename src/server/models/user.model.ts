import {model, models, Schema} from "mongoose";
import {postSchema} from "@/server/models/post.model";

export const userSchema = new Schema({
    firstName: String,
    lastName: String,
    username: {
        type: String,
        required: true,
        index: {
            unique: true,
            sparse: true
        }
    },
    email: {
        type: String,
        required: true,
        index: {
            unique: true,
            sparse: true
        }
    },
}, { timestamps: true })


const userModel = models.User || model('User', userSchema)
export default userModel