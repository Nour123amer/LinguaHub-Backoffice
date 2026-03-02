
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: "https://api.linguahub.net/graphql",
  documents: ["app/graphql/queries/**/*.{ts,tsx}", 
    "app/graphql/mutations/**/*.{ts,tsx}"
  ],
  generates: {
    "app/graphql/generated/": {
      preset: "client",
      // plugins: []
    }
  }
};

export default config;
