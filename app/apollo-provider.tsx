"use client";

import { useSession } from "next-auth/react";
import { useEffect, useMemo, useState } from "react";
import { createApolloClient } from "@/lib/apollo-client";
import { ApolloProvider } from "@apollo/client/react";

interface ApolloClientProviderProps {
  children: React.ReactNode;
  accessToken?: string;
}

export default function ApolloClientProvider({ children ,accessToken }:ApolloClientProviderProps) {
    const [mounted, setMounted] = useState(false);
  const [token, setToken] = useState<string | null>(null);

  // Sync token
  // useEffect(() => {
  //   const sessionToken = (session as any)?.accessToken;
  //   if (sessionToken) {
  //     localStorage.setItem("accessToken", sessionToken as string);
  //     setToken(sessionToken);
  //   } else {
  //     const storedToken = localStorage.getItem("accessToken");
  //     if (storedToken) setToken(storedToken);
  //   }
  // }, [session]);

  // Create client once token exists
  const apolloClient = useMemo(() => {
    //  if (!token) return null;
    return createApolloClient(accessToken);
  }, [token]);

  useEffect(()=>{
    setMounted(true)
  },[])

    if (!apolloClient) return null;

  return      <ApolloProvider client={apolloClient}>{children}</ApolloProvider>;

    

}
