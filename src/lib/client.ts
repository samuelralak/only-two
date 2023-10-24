import { type AppRouter } from "@/server/app-router"
import { createTRPCReact } from "@trpc/react-query"

export default createTRPCReact<AppRouter>({})