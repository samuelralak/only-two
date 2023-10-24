import {PlusIcon} from '@heroicons/react/24/outline'
import CreatePost from "@/components/home/CreatePost";
import Container from "@/components/Container";
import PostList from "@/components/home/PostList";
import {classNames} from "@/lib/helpers";
import client from "@/lib/client";
import Loader from "@/components/Loader";
import {Post} from "@/lib/resources/post.resource";
import {Suspense} from "react";

const tabs = [
    {name: 'Featured', href: '#', current: true},
    {name: 'All Posts', href: '#', current: false},
    {name: 'Following', href: '#', current: false},
]

const HomePage = () => {
    const {isLoading, data} = client.fetchPosts.useQuery({})

    return (
        <Container>
            <div
                className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-6 border-b border-white/5 px-4 shadow-sm sm:px-6 lg:px-8">

                <div className="sm:block w-full bg-white">
                    <div className="">
                        <nav className="-mb-px flex space-x-8" aria-label="Tabs">
                            {tabs.map((tab) => (
                                <a
                                    key={tab.name}
                                    href={tab.href}
                                    className={classNames(
                                        tab.current
                                            ? 'border-indigo-500 text-indigo-600'
                                            : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700',
                                        'whitespace-nowrap border-b-2 py-6 px-1 text-sm font-medium'
                                    )}
                                    aria-current={tab.current ? 'page' : undefined}
                                >
                                    {tab.name}
                                </a>
                            ))}
                        </nav>
                    </div>
                </div>
            </div>


            <div className="relative min-h-full">
                <div>
                    <CreatePost/>
                </div>

                <Suspense fallback={<Loader />}>
                    {data && (<PostList posts={data.posts as Post[]}/>)}
                </Suspense>


                {isLoading ? (<Loader/>) : (
                    <div className={'w-full p-10 mb-5 flex justify-center'}>
                        <button
                            type="button"
                            className="rounded-full bg-white px-4 py-2.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                        >
                            Load more
                        </button>
                    </div>
                )}
            </div>

            {/*<button*/}
            {/*    type="button"*/}
            {/*    className="z-50 bottom-1/4 lg:hidden absolute right-0 mr-5 rounded-full bg-indigo-600 p-4 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"*/}
            {/*>*/}
            {/*    <PlusIcon className="h-6 w-6" aria-hidden="true"/>*/}
            {/*</button>*/}
        </Container>
    )
}

export default HomePage