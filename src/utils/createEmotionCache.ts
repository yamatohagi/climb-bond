import createCache from '@emotion/cache';

// ----------------------------------------------------------------------

const isBrowser = typeof document !== 'undefined';

export default function createEmotionCache() {
  let insertionPoint;

  if (isBrowser) {
    const emotionInsertionPoint = document.querySelector('meta[name="emotion-insertion-point"]');
    insertionPoint = emotionInsertionPoint ?? undefined;
  }

  // @ts-expect-error TS(2322): Type 'Element | undefined' is not assignable to ty... Remove this comment to see the full error message
  return createCache({ key: 'css', insertionPoint });
}
