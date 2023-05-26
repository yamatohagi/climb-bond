import PropTypes from 'prop-types';
// @mui
import { Typography, Stack, Avatar, Box, Link } from '@mui/material';
// utils
// @ts-expect-error TS(2307): Cannot find module 'src/utils/formatNumber' or its... Remove this comment to see the full error message
import { fShortenNumber } from 'src/utils/formatNumber';
// components
// @ts-expect-error TS(2307): Cannot find module 'src/components/iconify' or its... Remove this comment to see the full error message
import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

export default function TravelOrderCompletedInfo({
  tour
}: any) {
  const { slug, ratings, reviews, tourGuide } = tour;

  return (
    // @ts-expect-error TS(2749): 'Stack' refers to a value, but is being used as a ... Remove this comment to see the full error message
    <Stack
      // @ts-expect-error TS(2304): Cannot find name 'spacing'.
      spacing={2}
      // @ts-expect-error TS(2304): Cannot find name 'direction'.
      direction={{ xs: 'column', md: 'row' }}
      // @ts-expect-error TS(2304): Cannot find name 'justifyContent'.
      justifyContent={{ md: 'space-between' }}
    >
      // @ts-expect-error TS(2749): 'Stack' refers to a value, but is being used as a ... Remove this comment to see the full error message
      <Stack spacing={2}>
        // @ts-expect-error TS(2749): 'Typography' refers to a value, but is being used ... Remove this comment to see the full error message
        <Typography variant="h5">{slug}</Typography>

        // @ts-expect-error TS(2304): Cannot find name 'spacing'.
        <Stack spacing={0.5} direction="row" alignItems="center">
          // @ts-expect-error TS(2304): Cannot find name 'icon'.
          <Iconify icon="carbon:star-filled" sx={{ color: 'warning.main' }} />
          // @ts-expect-error TS(2304): Cannot find name 'sx'.
          <Box sx={{ typography: 'h6' }}>
            // @ts-expect-error TS(2304): Cannot find name 'ratings'.
            {Number.isInteger(ratings) ? `${ratings}.0` : ratings}
          </Box>

          // @ts-expect-error TS(2304): Cannot find name 'reviews'.
          {reviews && (
            // @ts-expect-error TS(2749): 'Link' refers to a value, but is being used as a t... Remove this comment to see the full error message
            <Link variant="body2" sx={{ color: 'text.secondary' }}>
              // @ts-expect-error TS(2304): Cannot find name 'reviews'.
              ({fShortenNumber(reviews: any)} reviews)
            </Link>
          )}
        // @ts-expect-error TS(2365): Operator '<' cannot be applied to types 'boolean' ... Remove this comment to see the full error message
        </Stack>
      </Stack>

      // @ts-expect-error TS(2304): Cannot find name 'direction'.
      <Stack direction="row" alignItems="center" spacing={1.5}>
        // @ts-expect-error TS(2749): 'Avatar' refers to a value, but is being used as a... Remove this comment to see the full error message
        <Avatar src={tourGuide?.picture} />
        // @ts-expect-error TS(2304): Cannot find name 'div'.
        <div>
          // @ts-expect-error TS(2749): 'Typography' refers to a value, but is being used ... Remove this comment to see the full error message
          <Typography variant="body2" sx={{ color: 'text.disabled' }}>
            // @ts-expect-error TS(2304): Cannot find name 'Tour'.
            Tour guide by
          </Typography>
          // @ts-expect-error TS(2304): Cannot find name 'variant'.
          <Typography variant="subtitle2">{tourGuide?.name}</Typography>
        </div>
      </Stack>
    </Stack>
  );
}

TravelOrderCompletedInfo.propTypes = {
  tour: PropTypes.shape({
    ratings: PropTypes.number,
    reviews: PropTypes.number,
    slug: PropTypes.string,
    tourGuide: PropTypes.shape({
      name: PropTypes.string,
      picture: PropTypes.string,
    }),
  }),
};
