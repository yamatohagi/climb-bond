import PropTypes from 'prop-types';
// @mui
import {
  Box,
  Stack,
  Rating,
  Button,
  Container,
  Typography,
  Unstable_Grid2 as Grid,
} from '@mui/material';
// utils
// @ts-expect-error TS(2307): Cannot find module 'src/utils/formatNumber' or its... Remove this comment to see the full error message
import { fShortenNumber } from 'src/utils/formatNumber';
// components
// @ts-expect-error TS(2307): Cannot find module 'src/components/iconify' or its... Remove this comment to see the full error message
import Iconify from 'src/components/iconify';
//
import { ReviewProgress } from '../components';

// ----------------------------------------------------------------------

export default function ReviewSummary({
  reviewsNumber,
  ratingsNumber,
  onOpenForm
}: any) {
  return (
    // @ts-expect-error TS(2749): 'Box' refers to a value, but is being used as a ty... Remove this comment to see the full error message
    <Box
      // @ts-expect-error TS(2304): Cannot find name 'sx'.
      sx={{
        // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
        overflow: 'hidden',
        // @ts-expect-error TS(2304): Cannot find name 'bgcolor'.
        bgcolor: 'background.neutral',
        // @ts-expect-error TS(2304): Cannot find name 'py'.
        py: { xs: 8, md: 10 },
      }}
    >
      // @ts-expect-error TS(2749): 'Container' refers to a value, but is being used a... Remove this comment to see the full error message
      <Container>
        // @ts-expect-error TS(2749): 'Grid' refers to a value, but is being used as a t... Remove this comment to see the full error message
        <Grid container spacing={{ xs: 5, md: 8 }}>
          // @ts-expect-error TS(2749): 'Grid' refers to a value, but is being used as a t... Remove this comment to see the full error message
          <Grid xs={12} md={4}>
            // @ts-expect-error TS(2749): 'Typography' refers to a value, but is being used ... Remove this comment to see the full error message
            <Typography variant="h3">Reviews</Typography>

            // @ts-expect-error TS(2304): Cannot find name 'spacing'.
            <Stack spacing={2} direction="row" alignItems="center" sx={{ my: 3 }}>
              // @ts-expect-error TS(2749): 'Typography' refers to a value, but is being used ... Remove this comment to see the full error message
              <Typography variant="h2"> {ratingsNumber}</Typography>

              // @ts-expect-error TS(2304): Cannot find name 'spacing'.
              <Stack spacing={0.5}>
                // @ts-expect-error TS(2749): 'Rating' refers to a value, but is being used as a... Remove this comment to see the full error message
                <Rating
                  // @ts-expect-error TS(2304): Cannot find name 'value'.
                  value={ratingsNumber}
                  // @ts-expect-error TS(2304): Cannot find name 'readOnly'.
                  readOnly
                  // @ts-expect-error TS(2304): Cannot find name 'precision'.
                  precision={0.1}
                  // @ts-expect-error TS(2304): Cannot find name 'sx'.
                  sx={{
                    '& svg': {
                      // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
                      color: 'text.primary',
                    },
                  }}
                // @ts-expect-error TS(2365): Operator '<' cannot be applied to types 'RegExp' a... Remove this comment to see the full error message
                />
                // @ts-expect-error TS(2304): Cannot find name 'variant'.
                <Typography variant="body2">{fShortenNumber(reviewsNumber: any)} reviews</Typography>
              </Stack>
            </Stack>

            <Button
              // @ts-expect-error TS(2304): Cannot find name 'size'.
              size="large"
              // @ts-expect-error TS(2304): Cannot find name 'color'.
              color="inherit"
              // @ts-expect-error TS(2304): Cannot find name 'variant'.
              variant="contained"
              // @ts-expect-error TS(2304): Cannot find name 'startIcon'.
              startIcon={<Iconify icon="carbon:edit" />}
              // @ts-expect-error TS(2304): Cannot find name 'onClick'.
              onClick={onOpenForm}
            >
              // @ts-expect-error TS(2304): Cannot find name 'Write'.
              Write a Review
            </Button>
          </Grid>

          // @ts-expect-error TS(2304): Cannot find name 'xs'.
          <Grid xs={12} md={4}>
            // @ts-expect-error TS(2749): 'ReviewProgress' refers to a value, but is being u... Remove this comment to see the full error message
            <ReviewProgress />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

ReviewSummary.propTypes = {
  onOpenForm: PropTypes.func,
  ratingsNumber: PropTypes.number,
  reviewsNumber: PropTypes.number,
};
