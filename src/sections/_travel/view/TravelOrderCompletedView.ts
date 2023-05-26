// next
import NextLink from 'next/link';
// @mui
import { Container, Typography, Stack, Button } from '@mui/material';
// hooks
// @ts-expect-error TS(2307): Cannot find module 'src/hooks/useResponsive' or it... Remove this comment to see the full error message
import useResponsive from 'src/hooks/useResponsive';
// components
// @ts-expect-error TS(2307): Cannot find module 'src/components/image' or its c... Remove this comment to see the full error message
import Image from 'src/components/image';
// @ts-expect-error TS(2307): Cannot find module 'src/components/iconify' or its... Remove this comment to see the full error message
import Iconify from 'src/components/iconify';
// _mock
// @ts-expect-error TS(2307): Cannot find module 'src/_mock' or its correspondin... Remove this comment to see the full error message
import { _tours } from 'src/_mock';
//
import { TravelOrderCompletedInfo, TravelOrderCompletedSummary } from '../order-completed';

// ----------------------------------------------------------------------

const _mockTour = _tours[1];

export default function TravelOrderCompletedView() {
  const isMdUp = useResponsive('up', 'md');

  return (
    // @ts-expect-error TS(2749): 'Container' refers to a value, but is being used a... Remove this comment to see the full error message
    <Container
      // @ts-expect-error TS(2304): Cannot find name 'sx'.
      sx={{
        // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
        pt: 5,
        // @ts-expect-error TS(2304): Cannot find name 'pb'.
        pb: { xs: 8, md: 15 },
        // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
        gap: 10,
        // @ts-expect-error TS(2304): Cannot find name 'display'.
        display: 'grid',
        // @ts-expect-error TS(2304): Cannot find name 'alignItems'.
        alignItems: 'flex-start',
        // @ts-expect-error TS(2304): Cannot find name 'gridTemplateColumns'.
        gridTemplateColumns: { md: 'repeat(2, 1fr)' },
      }}
    >
      // @ts-expect-error TS(18004): No value exists in scope for the shorthand propert... Remove this comment to see the full error message
      {isMdUp && (
        // @ts-expect-error TS(2304): Cannot find name 'alt'.
        <Image alt="cover" src={_mockTour.coverImg} ratio="3/4" sx={{ borderRadius: 2 }} />
      )}

      // @ts-expect-error TS(2749): 'Stack' refers to a value, but is being used as a ... Remove this comment to see the full error message
      <Stack spacing={5}>
        // @ts-expect-error TS(2749): 'Typography' refers to a value, but is being used ... Remove this comment to see the full error message
        <Typography variant="h2">Completed 🎉</Typography>

        // @ts-expect-error TS(2304): Cannot find name 'tour'.
        <TravelOrderCompletedInfo tour={_mockTour} />

        // @ts-expect-error TS(2749): 'TravelOrderCompletedSummary' refers to a value, b... Remove this comment to see the full error message
        <TravelOrderCompletedSummary />

        // @ts-expect-error TS(2304): Cannot find name 'spacing'.
        <Stack spacing={2.5} direction={{ xs: 'column', md: 'row' }} justifyContent="center">
          // @ts-expect-error TS(2749): 'Button' refers to a value, but is being used as a... Remove this comment to see the full error message
          <Button
            // @ts-expect-error TS(2304): Cannot find name 'component'.
            component={NextLink}
            // @ts-expect-error TS(2304): Cannot find name 'href'.
            href="/"
            // @ts-expect-error TS(2304): Cannot find name 'variant'.
            variant="outlined"
            // @ts-expect-error TS(2304): Cannot find name 'size'.
            size="large"
            // @ts-expect-error TS(2304): Cannot find name 'color'.
            color="inherit"
            // @ts-expect-error TS(2304): Cannot find name 'startIcon'.
            startIcon={<Iconify icon="carbon:chevron-left" />}
          >
            // @ts-expect-error TS(2304): Cannot find name 'Back'.
            Back Home
          </Button>

          <Button
            // @ts-expect-error TS(2304): Cannot find name 'variant'.
            variant="contained"
            // @ts-expect-error TS(2304): Cannot find name 'size'.
            size="large"
            // @ts-expect-error TS(2304): Cannot find name 'color'.
            color="inherit"
            // @ts-expect-error TS(2304): Cannot find name 'startIcon'.
            startIcon={<Iconify icon="carbon:package" />}
          >
            // @ts-expect-error TS(2304): Cannot find name 'Download'.
            Download Invoice
          </Button>
        </Stack>
      </Stack>
    </Container>
  );
}
