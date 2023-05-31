import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

export const client = new ApolloClient({
  uri: 'http://localhost:5002/api/graphql', // GraphQLサーバのURLを適切に設定してください
  cache: new InMemoryCache(),
});

export const GET_POSTS = gql`
  query GetPosts {
    posts {
      id
      title
      content
    }
  }
`;
