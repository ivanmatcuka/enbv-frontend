import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: {
    [`${process.env.NEXT_PUBLIC_API_URL}/graphql/v1`]: {
      headers: {
        apikey: process.env.SUPABASE_KEY ?? '',
      },
    },
  },
  documents: 'gql/**/*.gql',
  generates: {
    'apollo/generated.ts': {
      plugins: [
        'typescript',
        'typescript-operations',
        'typescript-react-apollo',
      ],
      config: {
        withHooks: true,
      },
    },
  },
};

export default config;
