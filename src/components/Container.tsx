"use client"

import Navigation from "@/components/Navigation";

const Container = ({children} : {children: React.ReactNode }) => {
    return (
        <div className="container mx-auto">
            <Navigation/>
            <main className="lg:pl-72">
                <div className="xl:pr-96 h-[80vh]"> {children} </div>
                <aside
                    className="fixed inset-y-0 right-0 hidden w-96 overflow-y-auto border-l border-gray-200 px-4 py-6 sm:px-6 lg:px-8 xl:block">
                    {/* Secondary column (hidden on smaller screens) */}
                    CHecking
                </aside>
            </main>
        </div>
    )
}

export default Container