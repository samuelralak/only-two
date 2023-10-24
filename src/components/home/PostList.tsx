"use client"

import client from "@/lib/client";
import {Suspense} from "react";
import Loader from "@/components/Loader";
import PostItem from "@/components/posts/PostItem";
import {Post} from "@/lib/resources/post.resource";

const PostList = () => {
    try {
        client.fetchPosts.useQuery({})
    } catch (e) {
        console.log({e})
    }

    const [{pages}, postsQuery] = client.fetchPosts.useSuspenseInfiniteQuery(
        {},
        {getNextPageParam: (lastPage) => lastPage.nextCursor}
    );

    console.log({pages})

    const {isFetching, isFetchingNextPage, fetchNextPage, hasNextPage} = postsQuery

    if (isFetching && !isFetchingNextPage) {
        return <Loader/>
    }

    return (
        <Suspense fallback={<Loader/>}>
            <ul role="list" className="divide-y divide-gray-200">
                {pages.map((page) => page.posts).flat(Infinity).map((post, index) => (
                    <li key={"_id" in post ? post._id : index} className={'overflow-hidden bg-white px-4 py-4 sm:px-6'}>
                        <PostItem  post={post as Post} />
                    </li>
                ))}
            </ul>

            {isFetchingNextPage ? (<Loader/>) : (
                <div className={'w-full p-10 mb-5 flex justify-center'}>
                    <button
                        type="button"
                        onClick={() => fetchNextPage()}
                        className="rounded-full bg-white px-4 py-2.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                    >
                        Load more
                    </button>
                </div>
            )}
        </Suspense>
    )
}

export default PostList