import * as trpcNext from '@trpc/server/adapters/next';
import appRouter from "@/server/app-router"
import { fetchRequestHandler } from "@trpc/server/adapters/fetch"
import dbConnect from "@/server/mongoose";
import {seedDatabase} from "@/server/mongoose/seeder";

const getBaseUrl = () => {
    if (typeof window !== 'undefined') return ''; // browser should use relative url
    if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`; // SSR should use vercel url
    if (process.env.INTERNAL_ADDRESS) return `http://${process.env.INTERNAL_ADDRESS}:${process.env.PORT ?? 3000}`;
    return `http://localhost:${process.env.PORT ?? 3000}`; // dev SSR should use localhost
};

const requestHandler = (req: Request) =>
    fetchRequestHandler({
      endpoint: "/api/trpc",
      req,
      router: appRouter,
      createContext: async () => {
          await dbConnect()
          // await seedDatabase()
          return {}
      },
    })


export { requestHandler as GET, requestHandler as POST }