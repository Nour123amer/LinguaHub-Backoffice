import { GraphQLClient } from 'graphql-request';
import { getSdk } from '@/graphql/generated/server';

const graphqlUrl = process.env.NEXT_PUBLIC_GRAPHQL_URL || process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT;

if (!graphqlUrl) {
  throw new Error('GraphQL URL is not configured');
}

const client = new GraphQLClient(graphqlUrl, {
  credentials: 'include',
});

export const graphqlServerClient = getSdk(client);
