import {z} from "zod"
import {procedure, router} from "@/server/trpc";
import {faker} from "@faker-js/faker";


const createRandomUser = () => {
    const firstName = faker.person.firstName()
    const lastName = faker.person.lastName()

    return {
        _id: faker.string.uuid,
        firstName,
        lastName,
        username: faker.internet.userName({firstName, lastName}).toLowerCase()
    }
}

const createRandomPost = () => {
    const user = createRandomUser()

    return {
        _id: faker.string.uuid,
        content: faker.lorem.sentence({min: 1, max: 35}),
        createdAt: faker.date.past(),
        userId: user._id,
        user
    }
}

const generatePosts = (count = 100) => {
    let posts = [];

    [...Array(count).keys()].forEach((_) => {
        posts = [...posts, ...[createRandomPost()]]
    })

    return posts.sort((a, b) => b.createdAt - a.createdAt)
}

const appRouter = router({
    hello: procedure
        .input(
            z.object({
                text: z.string(),
            }),
        )
        .query((opts) => {
            return generatePosts();
        }),
});
// export type definition of API

export type AppRouter = typeof appRouter;
export default appRouter