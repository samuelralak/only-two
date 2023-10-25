"use client"

import Navigation from "@/components/Navigation";

const Container = ({children} : {children: React.ReactNode }) => {
    return (
        <div className="mx-auto max-w-7xl">
            <div className="mx-auto max-w-5xl">
                <Navigation/>
                <main className="lg:pl-72">
                    <div className="min-h-[80vh] lg:border-r lg:border-gray-200"> {children} </div>
                </main>
            </div>
        </div>
    )
}

export default Container