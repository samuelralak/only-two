'use client'

import TrpcProvider from "@/components/TrpcProvider";

const Layout = ({children} : {children: React.ReactNode}) => {
    return (
        <TrpcProvider>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-3xl">{children}</div>
            </div>
        </TrpcProvider>
    )
}

export default Layout