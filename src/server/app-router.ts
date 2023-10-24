import {z} from "zod"
import {procedure, router} from "@/server/trpc";
import PostModel from "@/server/models/post.model";
import UserModel from "@/server/models/user.model";
import {Post} from "@/lib/resources/post.resource";

const appRouter = router({
    fetchPosts: procedure
        .input(
            z.object({
                cursor: z.number().optional(),
                limit: z.number().optional()
            }),
        )
        .query(async (opts) : Promise<{nextCursor: number, posts: Post[]}> => {
            const {cursor = 0, limit = 10} = opts.input;
            const results: Post[] = await PostModel.find({})
                .limit(limit)
                .skip(cursor === 0 ? cursor : cursor + 1)
                .sort({createdAt: 'desc'})
                .exec();

            return {
                posts: results,
                nextCursor: results.length + cursor
            }
        }),
    createPost: procedure
        .input(
            z.object({
                content: z.string(),
            }),
        )
        .mutation(async (opts) => {
            const currentTimestamp = Math.floor(Date.now() / 1000)
            const user = await UserModel.create({
                firstName: 'User',
                lastName: currentTimestamp,
                username: `u${currentTimestamp}`,
                email: `u${currentTimestamp}@mail.com`
            })

            const post = await PostModel.create({content: opts.input.content, user})
            return {post}
        }),
    deletePost: procedure
        .input(
            z.object({
                postId: z.string(),
            }),
        )
        .mutation(async (opts) => {
            const postId = opts.input.postId;
            await PostModel.deleteOne({_id: postId})

            return {postId}
        }),
});
// export type definition of API

export type AppRouter = typeof appRouter;
export default appRouter