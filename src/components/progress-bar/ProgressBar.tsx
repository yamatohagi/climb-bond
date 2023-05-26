import { memo, useEffect } from 'react';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'npro... Remove this comment to see the full error message
import NProgress from 'nprogress';
// next
import { useRouter } from 'next/router';
//
import StyledProgressBar from './styles';

// ----------------------------------------------------------------------

function ProgressBar() {
  const router = useRouter();

  NProgress.configure({ showSpinner: false });

  useEffect(() => {
    let timeout: any;

    const handleStart = () => {
      timeout = setTimeout(() => NProgress.start(), 300);
    };

    const handleStop = () => {
      NProgress.done();
      clearTimeout(timeout);
    };

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleStop);
    router.events.on('routeChangeError', handleStop);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleStop);
      router.events.off('routeChangeError', handleStop);
      clearTimeout(timeout);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  return <StyledProgressBar />;
}

export default memo(ProgressBar);
