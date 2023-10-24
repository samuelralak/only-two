"use client"

import client from "@/lib/client";
import {httpBatchLink} from "@trpc/client";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";

const queryClient = new QueryClient()
const trpcClient =  client.createClient({
    links: [
        httpBatchLink({
            url: `/api/trpc`,
            async headers() {
                return {
                    // authorization: getAuthCookie(),
                };
            },
        }),
    ],
})

export default ({children}) => {
    return (
        <client.Provider client={trpcClient} queryClient={queryClient}>
            <QueryClientProvider client={queryClient}>
                {children}
            </QueryClientProvider>
        </client.Provider>
    )
}