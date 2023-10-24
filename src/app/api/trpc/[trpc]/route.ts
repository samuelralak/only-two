import appRouter from "@/server/app-router"
import { fetchRequestHandler } from "@trpc/server/adapters/fetch"
import dbConnect from "@/server/mongoose";
import {seedDatabase} from "@/server/mongoose/seeder";

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