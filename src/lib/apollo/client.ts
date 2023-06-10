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

// ----------------------------------------------------------------------

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

const httpLink = createHttpLink({
  uri: process.env.NEXT_PUBLIC_VERCEL_URL
    ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}/api/graphql`
    : 'http://localhost:8002/api/graphql',
  // uri: 'http://10.20.1.19:5002/api/graphql',
});

export const apolloClient = new ApolloClient({
  cache: new InMemoryCache(),
  link: ApolloLink.from([errorLink, httpLink]), // Ensure errorLink comes before httpLink
});

export const ApolloProvider = ap;
