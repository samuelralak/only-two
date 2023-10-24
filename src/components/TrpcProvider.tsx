"use client"

import client from "@/lib/client";
import {httpBatchLink} from "@trpc/client";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";

const getBaseUrl = () => {
    if (typeof window !== 'undefined') return ''; // browser should use relative url
    if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`; // SSR should use vercel url
    if (process.env.INTERNAL_ADDRESS) return `http://${process.env.INTERNAL_ADDRESS}:${process.env.PORT ?? 3000}`;
    return `http://127.0.0.1:${process.env.PORT ?? 3000}`; // dev SSR should use localhost
};

const queryClient = new QueryClient()
const trpcClient =  client.createClient({
    links: [
        httpBatchLink({
            url: `${getBaseUrl()}/api/trpc`,
            async headers() {
                return {
                    // authorization: getAuthCookie(),
                };
            },
        }),
    ],
})

const TrpcProvider = ({children} : { children: React.ReactNode }) => {
    return (
        <client.Provider client={trpcClient} queryClient={queryClient}>
            <QueryClientProvider client={queryClient}>
                {children}
            </QueryClientProvider>
        </client.Provider>
    )
}
export default TrpcProvider