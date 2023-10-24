"use client"

import PostItem from "@/components/posts/PostItem";
import {Post} from "@/lib/resources/post.resource";

const PostList = ({posts}: { posts: Post[] }) => {
    return (
        <ul role="list" className="divide-y divide-gray-200">
            {posts.map((post) => (
                <li key={post._id} className={'overflow-hidden bg-white px-4 py-4 sm:px-6'}>
                    <PostItem post={post as Post}/>
                </li>
            ))}
        </ul>
    )
}

export default PostList