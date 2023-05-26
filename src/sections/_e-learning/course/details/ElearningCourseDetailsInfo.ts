import PropTypes from 'prop-types';
// @mui
import { Stack, Typography, Card, Box, Button } from '@mui/material';
// utils
// @ts-expect-error TS(2307): Cannot find module 'src/utils/formatNumber' or its... Remove this comment to see the full error message
import { fCurrency } from 'src/utils/formatNumber';
// components
// @ts-expect-error TS(2307): Cannot find module 'src/components/iconify' or its... Remove this comment to see the full error message
import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

export default function ElearningCourseDetailsInfo({
  course
}: any) {
  const { price, priceSale, lessons, resources } = course;

  return (
    // @ts-expect-error TS(2749): 'Card' refers to a value, but is being used as a t... Remove this comment to see the full error message
    <Card sx={{ p: 3, borderRadius: 2 }}>
      // @ts-expect-error TS(2749): 'Stack' refers to a value, but is being used as a ... Remove this comment to see the full error message
      <Stack spacing={3}>
        // @ts-expect-error TS(2749): 'Stack' refers to a value, but is being used as a ... Remove this comment to see the full error message
        <Stack direction="row" sx={{ typography: 'h3' }}>
          // @ts-expect-error TS(18004): No value exists in scope for the shorthand propert... Remove this comment to see the full error message
          {priceSale > 0 && (
            // @ts-expect-error TS(2749): 'Box' refers to a value, but is being used as a ty... Remove this comment to see the full error message
            <Box
              // @ts-expect-error TS(2304): Cannot find name 'component'.
              component="span"
              // @ts-expect-error TS(2304): Cannot find name 'sx'.
              sx={{
                // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
                mr: 1,
                // @ts-expect-error TS(2552): Cannot find name 'typography'. Did you mean 'Typog... Remove this comment to see the full error message
                typography: 'h4',
                // @ts-expect-error TS(2304): Cannot find name 'color'.
                color: 'text.disabled',
                // @ts-expect-error TS(2304): Cannot find name 'textDecoration'.
                textDecoration: 'line-through',
              }}
            // @ts-expect-error TS(2365): Operator '<' cannot be applied to types 'boolean' ... Remove this comment to see the full error message
            >
              {fCurrency(priceSale: any)}
            </Box>
          )}
          // @ts-expect-error TS(2304): Cannot find name 'price'.
          {fCurrency(price)}
        </Stack>

        // @ts-expect-error TS(2304): Cannot find name 'spacing'.
        <Stack spacing={2}>
          // @ts-expect-error TS(2749): 'Typography' refers to a value, but is being used ... Remove this comment to see the full error message
          <Typography>This course includes:</Typography>

          // @ts-expect-error TS(2304): Cannot find name 'direction'.
          <Stack direction="row" alignItems="center" sx={{ typography: 'body2' }}>
            // @ts-expect-error TS(2304): Cannot find name 'icon'.
            <Iconify icon="carbon:document" sx={{ mr: 1 }} />
            // @ts-expect-error TS(2304): Cannot find name 'component'.
            <Box component="strong" sx={{ mr: 0.5 }}>
              // @ts-expect-error TS(18004): No value exists in scope for the shorthand propert... Remove this comment to see the full error message
              {lessons?.length}
            </Box>
            // @ts-expect-error TS(2304): Cannot find name 'Lessons'.
            Lessons
          </Stack>

          // @ts-expect-error TS(2304): Cannot find name 'direction'.
          <Stack direction="row" alignItems="center" sx={{ typography: 'body2' }}>
            // @ts-expect-error TS(2304): Cannot find name 'icon'.
            <Iconify icon="carbon:document-download" sx={{ mr: 1 }} />
            // @ts-expect-error TS(2304): Cannot find name 'component'.
            <Box component="strong" sx={{ mr: 0.5 }}>
              // @ts-expect-error TS(18004): No value exists in scope for the shorthand propert... Remove this comment to see the full error message
              {resources}
            </Box>
            // @ts-expect-error TS(2304): Cannot find name 'Downloadable'.
            Downloadable resources
          </Stack>

          // @ts-expect-error TS(2304): Cannot find name 'direction'.
          <Stack direction="row" alignItems="center" sx={{ typography: 'body2' }}>
            // @ts-expect-error TS(2304): Cannot find name 'icon'.
            <Iconify icon="carbon:data-accessor" sx={{ mr: 1 }} />
            // @ts-expect-error TS(2304): Cannot find name 'Full'.
            Full lifetime access
          </Stack>

          // @ts-expect-error TS(2304): Cannot find name 'direction'.
          <Stack direction="row" alignItems="center" sx={{ typography: 'body2' }}>
            // @ts-expect-error TS(2304): Cannot find name 'icon'.
            <Iconify icon="carbon:devices" sx={{ mr: 1 }} />
            // @ts-expect-error TS(2304): Cannot find name 'Access'.
            Access on desktops, tablets, mobile
          </Stack>

          // @ts-expect-error TS(2304): Cannot find name 'direction'.
          <Stack direction="row" alignItems="center" sx={{ typography: 'body2' }}>
            // @ts-expect-error TS(2304): Cannot find name 'icon'.
            <Iconify icon="carbon:certificate" sx={{ mr: 1 }} />
            // @ts-expect-error TS(2304): Cannot find name 'Certificate'.
            Certificate of completion
          </Stack>
        </Stack>

        // @ts-expect-error TS(2304): Cannot find name 'variant'.
        <Button variant="contained" size="large" color="inherit">
          // @ts-expect-error TS(2304): Cannot find name 'Enrol'.
          Enrol Now
        </Button>
      </Stack>
    </Card>
  );
}

ElearningCourseDetailsInfo.propTypes = {
  course: PropTypes.shape({
    lessons: PropTypes.array,
    price: PropTypes.number,
    priceSale: PropTypes.number,
    resources: PropTypes.number,
  }),
};
