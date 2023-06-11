// scroll bar
import 'simplebar-react/dist/simplebar.min.css';

// lightbox
/* eslint-disable import/no-unresolved */
import 'yet-another-react-lightbox/styles.css';
import 'yet-another-react-lightbox/plugins/captions.css';
import 'yet-another-react-lightbox/plugins/thumbnails.css';

// slick-carousel
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// lazy image
import 'react-lazy-load-image-component/src/effects/blur.css';

// next
// @mui
// theme
// utils
import createEmotionCache from 'src/utils/createEmotionCache';
// components
import {
  ApolloClient,
  ApolloProvider as ap,
  InMemoryCache,
  ApolloLink,
  createHttpLink,
} from '@apollo/client';
import { onError } from '@apollo/client/link/error';

export const clientSideEmotionCache = createEmotionCache();

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.map(({ message, locations, path }) =>
      console.log(`GraphQLエラーが発生しました: ${message}`)
    );
  }

  if (networkError) {
    console.log(`ネットワークエラーが発生しました: ${networkError.message}`);
  }
});

let graphqlUri;
if (process.env.NEXT_PUBLIC_VERCEL_ENV === 'production') {
  graphqlUri = 'https://climbbond.com/api/graphql/';
} else if (process.env.NEXT_PUBLIC_VERCEL_URL) {
  graphqlUri = `https://${process.env.NEXT_PUBLIC_VERCEL_URL}/api/graphql/`;
} else {
  graphqlUri = 'http://localhost:8002/api/graphql/';
}

const httpLink = createHttpLink({
  uri: graphqlUri,
});

export const apolloClient = new ApolloClient({
  cache: new InMemoryCache(),
  link: ApolloLink.from([errorLink, httpLink]), // Ensure errorLink comes before httpLink
});

export const ApolloProvider = ap;
