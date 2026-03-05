"use client"

import type React from "react"
import { useSession } from "next-auth/react"
import { useEffect } from "react"
import { setAccessToken } from "./apollo-client"

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const { data: session } = useSession()

  useEffect(() => {
    if (session?.accessToken) {
      console.log("Storing token in localStorage:", session.accessToken)
      setAccessToken(session.accessToken as string)
    }
  }, [session?.accessToken])

  return <>{children}</>
}
