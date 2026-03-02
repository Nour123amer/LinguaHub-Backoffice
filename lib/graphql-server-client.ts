import { GraphQLClient } from 'graphql-request';
import { getSdk } from '@/graphql/generated/server';

const baseUrl =
  typeof window === "undefined"
    ? process.env.NEXT_PUBLIC_APP_URL
    : "";

const graphqlUrl =
  typeof window === "undefined"
    ? `${baseUrl}/api/graphql`
    : "/api/graphql";
    
if (!graphqlUrl) {
  throw new Error('GraphQL URL is not configured');
}

const client = new GraphQLClient(graphqlUrl, {
  credentials: 'include',
});

export const graphqlServerClient = getSdk(client);
