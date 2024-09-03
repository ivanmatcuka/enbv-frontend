import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: {
    [`${process.env.API_URL}/graphql/v1`]: {
      headers: {
        apikey: process.env.NEXT_PUBLIC_SUPABASE_KEY ?? '',
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
