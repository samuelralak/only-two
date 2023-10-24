"use client"

import Navigation from "@/components/Navigation";

const Container = ({children}) => {
    return (
        <div className="container mx-auto">
            <Navigation/>
            <main className="lg:pl-72">
                <div className="xl:pr-96 h-[80vh]"> {children} </div>
            </main>
        </div>
    )
}

export default Container