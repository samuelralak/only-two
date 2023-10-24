import {User} from "@/lib/resources/user.resource";

export interface Post {
    _id?: string;
    content: string;
    createdAt: string;
    updatedAt: string;
    user: User
}