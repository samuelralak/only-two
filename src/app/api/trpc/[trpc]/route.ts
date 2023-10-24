import appRouter from "@/server/app-router"
import { fetchRequestHandler } from "@trpc/server/adapters/fetch"

const requestHandler = (req: Request) =>
    fetchRequestHandler({
      endpoint: "/api/trpc",
      req,
      router: appRouter,
      createContext: () => ({}),
    })

export { requestHandler as GET, requestHandler as POST }