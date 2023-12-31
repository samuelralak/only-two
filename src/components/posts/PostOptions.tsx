import {Fragment, useState} from 'react'
import {Menu, Transition} from '@headlessui/react'
import {EllipsisVerticalIcon} from '@heroicons/react/20/solid'
import {classNames} from "@/lib/helpers";
import {TrashIcon} from "@heroicons/react/24/outline";
import DeletePostAlert from "@/components/posts/DeletePostAlert";
import client from "@/lib/client";

const PostOptions = ({ postId }: {postId: string}) => {
    const utils = client.useUtils();
    const [alertOpen, setAlertOpen] = useState<boolean>(false)
    const [isDeleting, setIsDeleting] = useState<boolean>(false)
    const mutation = client.deletePost.useMutation({
        async onSuccess(input) {
            await utils.fetchPosts.invalidate();
            setIsDeleting(false)
            setAlertOpen(false)
        },
    })

    const onConfirmDelete = async () => {
        setIsDeleting(true)
        await mutation.mutate({ postId })
    }

    return (
        <>
            <Menu as="div" className="relative inline-block text-left">
                <div>
                    <Menu.Button
                        className="flex items-center text-gray-400 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100">
                        <span className="sr-only">Open options</span>
                        <EllipsisVerticalIcon className="h-5 w-5" aria-hidden="true"/>
                    </Menu.Button>
                </div>

                <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                >
                    <Menu.Items
                        className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <div className="py-1">
                            <Menu.Item>
                                {({active}) => (
                                    <a
                                        onClick={() => setAlertOpen(true)}
                                        className={classNames(
                                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                            'block px-4 py-2 text-sm flex items-center'
                                        )}
                                    >
                                        <TrashIcon className={'h-4 h-4 text-pink-700'}/>&nbsp;Delete
                                    </a>
                                )}
                            </Menu.Item>
                        </div>
                    </Menu.Items>
                </Transition>
            </Menu>

            <DeletePostAlert isDeleting={isDeleting} open={alertOpen} setOpen={setAlertOpen} onDeleteConfirm={onConfirmDelete} />
        </>
    )
}

export default PostOptions