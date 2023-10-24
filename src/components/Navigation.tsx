import {Bars3Icon, BellIcon, EnvelopeIcon, HomeIcon, MagnifyingGlassIcon} from "@heroicons/react/24/outline";
import SidebarDesktop from "@/components/navigation/SidebarDesktop";
import SidebarMobile from "@/components/navigation/SidebarMobile";
import {useState} from "react";

const navigation = [
    {name: 'Home', href: '#', icon: HomeIcon, current: true},
    {name: 'Explore', href: '#', icon: MagnifyingGlassIcon, current: false},
    {name: 'Notifications', href: '#', icon: BellIcon, current: false},
    {name: 'Messages', href: '#', icon: EnvelopeIcon, current: false},
]
const Navigation = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false)

    return (
        <>
            <SidebarMobile setSidebarOpen={setSidebarOpen} sidebarOpen={sidebarOpen} navigation={navigation}/>
            <SidebarDesktop navigation={navigation}/>

            <div className="sticky top-0 z-40 flex items-center gap-x-6 bg-white px-4 py-4 sm:px-6 lg:hidden">
                <button type="button"
                        className="-m-2.5 p-2.5 text-gray-700 lg:hidden"
                        onClick={() => setSidebarOpen(true)}
                >
                    <span className="sr-only">Open sidebar</span>
                    <Bars3Icon className="h-6 w-6" aria-hidden="true"/>
                </button>

                <div className="flex-1 text-sm font-semibold leading-6 text-gray-900">Home</div>
                <a href="#">
                    <span className="sr-only">Your profile</span>
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-gray-500">
                        <span className="text-sm font-medium leading-none text-white">SR</span>
                    </span>
                </a>
            </div>
        </>
    )
}

export default Navigation