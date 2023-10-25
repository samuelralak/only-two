import {Post} from "@/lib/resources/post.resource";
import PostOptions from "@/components/posts/PostOptions";
import {
    ArrowPathRoundedSquareIcon,
    ArrowUpTrayIcon,
    ChatBubbleOvalLeftIcon,
    HeartIcon,
    ShareIcon
} from "@heroicons/react/24/outline";

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
                <div className="mt-3 flex justify-between space-x-8">
                    <div className="flex space-x-6">
                            <span className="inline-flex items-center text-sm">
                              <button type="button" className="inline-flex space-x-2 text-gray-400 hover:text-gray-500">
                                <ChatBubbleOvalLeftIcon className="h-5 w-5" aria-hidden="true" />
                                <span className="font-medium text-gray-900">{Math.floor(Math.random() * 100)}</span>
                                <span className="sr-only">comments</span>
                              </button>
                            </span>
                        <span className="inline-flex items-center text-sm">
                              <button type="button" className="inline-flex space-x-2 text-gray-400 hover:text-gray-500">
                                <ArrowPathRoundedSquareIcon className="h-5 w-5" aria-hidden="true" />
                                <span className="font-medium text-gray-900">{Math.floor(Math.random() * 100)}</span>
                                <span className="sr-only">reposts</span>
                              </button>
                            </span>
                        <span className="inline-flex items-center text-sm">
                              <button type="button" className="inline-flex space-x-2 text-gray-400 hover:text-gray-500">
                                <HeartIcon className="h-5 w-5" aria-hidden="true" />
                                <span className="font-medium text-gray-900">{Math.floor(Math.random() * 100)}</span>
                                <span className="sr-only">likes</span>
                              </button>
                            </span>
                    </div>
                    <div className="flex text-sm">
                            <span className="inline-flex items-center text-sm">
                              <button type="button" className="inline-flex space-x-2 text-gray-400 hover:text-gray-500">
                                <ArrowUpTrayIcon className="h-5 w-5" aria-hidden="true" />
                              </button>
                            </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PostItem