"use client"

import client from "@/lib/client";

const PostList = () => {
    const hello = client.hello.useQuery({ text: 'client' });

    if (!hello.data) {
        return <div>Loading...</div>;
    }

    return <p>List of posts</p>
}

export default PostList