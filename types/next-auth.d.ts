import { DefaultSession } from "next-auth"
import { JWT } from "next-auth/jwt"

declare module "next-auth" {
  interface Session {
    accessToken?: string
    roles?: string[]
    user: {
      id?: string
    } & DefaultSession["user"]
  }

  interface User {
    id?: string
    roles?: string[]
    accessToken?: string
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id?: string
    accessToken?: string
    roles?: string[]
  }
}