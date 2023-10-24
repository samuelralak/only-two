"use client"

import HomePage from "@/components/home/HomePage";
import TrpcProvider from "@/components/TrpcProvider";

const Page = () => (
    <TrpcProvider>
        <HomePage/>
    </TrpcProvider>
)
export default Page

