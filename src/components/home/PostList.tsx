"use client"

import client from "@/lib/client";

const PostList = () => {
    const hello = client.hello.useQuery({ text: 'client' });

    if (!hello.data) {
        return <div>Loading...</div>;
    }

    return (
        <ul role="list" className="divide-y divide-gray-200">
            {hello.data.map((post) => (
                <li key={post._id} className={'overflow-hidden bg-white px-4 py-4 sm:px-6'}>
                    <div className="flex">
                        <div className="mr-4 flex-shrink-0">
                            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gray-500">
                                <span className="font-medium leading-none text-white">
                                    {post.user.firstName[0]}{post.user.lastName[0]}
                                </span>
                            </span>
                        </div>

                        <div className="w-full">
                            <div className="py-0.5 text-sm text-gray-500 items-center  flex">
                                <div className="font-semibold text-gray-800">
                                    {post.user.firstName}&nbsp;{post.user.lastName[0]}.&nbsp;
                                </div>
                                <div className="text-ellipsis overflow-hidden w-16 lg:w-auto shrink-0">@{post.user.username}&nbsp;</div>
                                <div>
                                    <svg viewBox="0 0 2 2" className="h-0.5 w-0.5 flex-none fill-gray-800">
                                        <circle cx={1} cy={1} r={1} />
                                    </svg>

                                </div>
                                <span className="shrink-0">&nbsp;{(new Date(post.createdAt)).toLocaleDateString("en-US", {month: 'short', day: 'numeric'})}</span>
                            </div>
                            <p className="mt-1 text-sm">{post.content}</p>
                        </div>
                    </div>

                </li>
            ))}

        </ul>

    )
}

export default PostList