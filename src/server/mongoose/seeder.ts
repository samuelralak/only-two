import * as mongoose from "mongoose";
import {faker} from "@faker-js/faker";
import UserModel from "@/server/models/user.model";
import PostModel from "@/server/models/post.model";

const createRandomUser = () => {
    const firstName = faker.person.firstName()
    const lastName = faker.person.lastName()

    return {
        firstName,
        lastName,
        email: faker.internet.email(),
        username: faker.internet.userName({firstName, lastName}).toLowerCase()
    }
}

const createRandomPost = () => {
    const user = createRandomUser()

    return {
        content: faker.lorem.sentence({min: 1, max: 35}),
        user: new UserModel(user)
    }
}

const generatePosts = (count = 100) => {
    let posts = [];

    [...Array(count).keys()].forEach((_) => {
        posts = [...posts, ...[createRandomPost()]]
    })

    return posts
}

export const seedDatabase = async () => {
    await UserModel.deleteMany({})
    await PostModel.deleteMany({})
    await PostModel.insertMany(generatePosts())
}