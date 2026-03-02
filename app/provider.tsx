"use client";

import { SessionProvider, useSession } from "next-auth/react";
import { AuthProvider } from "@/lib/auth-provider";
import { ApolloProvider } from "@apollo/client/react";
import { useMemo, useEffect } from "react";
import { createApolloClient, setAccessToken } from "@/lib/apollo-client";
import { TooltipProvider } from "@/components/ui/tooltip";


function ApolloWrapper({ children }: { children: React.ReactNode }) {
  const { data: session } = useSession();
  const apolloClient = useMemo(() => createApolloClient(), []);

  // Sync NextAuth session token to Apollo Client
  useEffect(() => {
    const token = (session as any)?.accessToken;
    if (token) {
      setAccessToken(token);
    }
  }, [session]);

  return (
    <ApolloProvider client={apolloClient}>
      <AuthProvider>
        <TooltipProvider>
           {children}
        </TooltipProvider> 
      </AuthProvider>
    </ApolloProvider>
  );
}

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <ApolloWrapper>{children}</ApolloWrapper>
    </SessionProvider>
  );
}

