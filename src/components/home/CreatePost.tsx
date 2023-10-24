import {PaperClipIcon} from "@heroicons/react/24/outline";
import {FormEvent, SyntheticEvent, useState} from "react";
import client from "@/lib/client";

const CreatePost = () => {
    const [postContent, setPostContent] = useState<string>('')
    const [isCreating, setIsCreating] = useState<boolean>(false)
    const utils = client.useUtils();
    const mutation = client.createPost.useMutation({
        async onSuccess(input) {
            await utils.fetchPosts.invalidate();
        },
    })

    const onContentInput = (event: FormEvent) => {
        // @ts-ignore
        setPostContent(event.target.value)
    }

    const onCreatePost = async (content: string) => {
        setIsCreating(true)

        if (Boolean(content)) {
            await mutation.mutate({ content })
            setPostContent('')
        }

        setIsCreating(false)
    }

    return (
        <div className="flex items-start space-x-4 border-b border-gray-200 px-4 py-10 sm:px-6 lg:px-8 lg:py-6">
            <div className="flex-shrink-0">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gray-500">
                    <span className="font-medium leading-none text-white">SR</span>
                </span>

            </div>
            <div className="min-w-0 flex-1">
                <form action="#">
                    <div className="focus-within:border-indigo-600">
                        <label htmlFor="comment" className="sr-only">
                            What is happening?
                        </label>
                        <textarea
                            onInput={onContentInput}
                            rows={3}
                            name="comment"
                            id="comment"
                            className="block w-full resize-none border-0 border-b border-transparent p-0 pb-2 text-gray-900 placeholder:text-gray-400 focus:border-indigo-600 focus:ring-0 sm:text-sm sm:leading-6"
                            placeholder="What is happening?"
                            value={postContent}
                        />
                    </div>
                    <div className="flex justify-between pt-2">
                        <div className="flex items-center space-x-5">
                            <div className="flow-root">
                                <button
                                    type="button"
                                    className="-m-2 inline-flex h-10 w-10 items-center justify-center rounded-full text-gray-400 hover:text-gray-500"
                                >
                                    <PaperClipIcon className="h-6 w-6" aria-hidden="true" />
                                    <span className="sr-only">Attach a file</span>
                                </button>
                            </div>
                        </div>
                        <div className="flex-shrink-0">
                            <button
                                type="button"
                                disabled={isCreating}
                                onClick={() => onCreatePost(postContent)}
                                className="rounded-full bg-indigo-600 px-3.5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                {isCreating ? 'Submitting' : 'Create post'}
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default CreatePost