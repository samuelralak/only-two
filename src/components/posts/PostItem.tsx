import {Post} from "@/lib/resources/post.resource";
import PostOptions from "@/components/posts/PostOptions";

interface Props {
    post: Post
}

const PostItem = ({post}: Props) => {
    return (
        <div className="flex">
            <div className="mr-4 flex-shrink-0">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gray-500">
                    <span className="font-medium leading-none text-white">
                        {post?.user?.firstName[0]}{post?.user?.lastName[0]}
                    </span>
                </span>
            </div>

            <div className="w-full">
                <div className="py-0.5 text-sm text-gray-500 items-center  flex">
                    <div className="font-semibold text-gray-800">
                        {post?.user?.firstName}&nbsp;{post?.user?.lastName[0]}.&nbsp;
                    </div>
                    <div
                        className="text-ellipsis overflow-hidden w-16 lg:w-auto shrink-0">@{post?.user?.username}&nbsp;</div>
                    <div>
                        <svg viewBox="0 0 2 2" className="h-0.5 w-0.5 flex-none fill-gray-800">
                            <circle cx={1} cy={1} r={1}/>
                        </svg>

                    </div>
                    <div
                        className="shrink-0">&nbsp;{(new Date(post.createdAt)).toLocaleDateString("en-US", {
                        month: 'short',
                        day: 'numeric'
                    })}</div>
                    <div className={'flex-1'}></div>

                    <div className={'justify-self-end'}>
                        <PostOptions postId={post._id!} />
                    </div>

                </div>

                <p className="mt-1 text-sm">{post.content}</p>
            </div>
        </div>
    )
}

export default PostItem