import { getServerSession } from "next-auth";
import ApolloClientProvider from "./apollo-provider";
import { authOptions } from "@/lib/nextAuth";


export async function ApolloProviderWrapper({ children }: { children: React.ReactNode }) {
  const session = await getServerSession(authOptions);
  const accessToken = session?.accessToken;

  return (
    <ApolloClientProvider accessToken={accessToken}>
      {children}
    </ApolloClientProvider>
  );
}
