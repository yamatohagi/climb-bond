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

import PropTypes from 'prop-types';
import { CacheProvider } from '@emotion/react';
// next
import Head from 'next/head';
// @mui
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// theme
// @ts-expect-error TS(2307): Cannot find module 'src/theme' or its correspondin... Remove this comment to see the full error message
import ThemeProvider from 'src/theme';
// utils
// @ts-expect-error TS(2307): Cannot find module 'src/utils/createEmotionCache' ... Remove this comment to see the full error message
import createEmotionCache from 'src/utils/createEmotionCache';
// components
// @ts-expect-error TS(2307): Cannot find module 'src/components/progress-bar' o... Remove this comment to see the full error message
import ProgressBar from 'src/components/progress-bar';
// @ts-expect-error TS(2307): Cannot find module 'src/components/settings' or it... Remove this comment to see the full error message
import { ThemeSettings, SettingsProvider } from 'src/components/settings';
// @ts-expect-error TS(2307): Cannot find module 'src/components/animate/MotionL... Remove this comment to see the full error message
import MotionLazyContainer from 'src/components/animate/MotionLazyContainer';

// ----------------------------------------------------------------------

const clientSideEmotionCache = createEmotionCache();

export default function MyApp(props: any) {
  const { Component, pageProps, emotionCache = clientSideEmotionCache } = props;

  const getLayout = Component.getLayout ?? ((page: any) => page);

  return (
    // @ts-expect-error TS(2749): 'CacheProvider' refers to a value, but is being us... Remove this comment to see the full error message
    <CacheProvider value={emotionCache}>
      // @ts-expect-error TS(2749): 'Head' refers to a value, but is being used as a t... Remove this comment to see the full error message
      <Head>
        // @ts-expect-error TS(2304): Cannot find name 'meta'.
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>

      // @ts-expect-error TS(2304): Cannot find name 'dateAdapter'.
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <SettingsProvider>
          <ThemeProvider>
            <ThemeSettings>
              <MotionLazyContainer>
                <ProgressBar />
                // @ts-expect-error TS(2749): 'Component' refers to a value, but is being used a... Remove this comment to see the full error message
                {getLayout(<Component {...pageProps} />)}
              // @ts-expect-error TS(2365): Operator '<' cannot be applied to types 'boolean' ... Remove this comment to see the full error message
              </MotionLazyContainer>
            </ThemeSettings>
          </ThemeProvider>
        </SettingsProvider>
      </LocalizationProvider>
    </CacheProvider>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
};
