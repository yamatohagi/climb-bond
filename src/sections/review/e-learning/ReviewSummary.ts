// @mui

import PropTypes from 'prop-types';
import { Paper, Stack, Rating, Button, RadioGroup, Typography } from '@mui/material';
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
    // @ts-expect-error TS(2749): 'Paper' refers to a value, but is being used as a ... Remove this comment to see the full error message
    <Paper variant="outlined" sx={{ p: 4, pr: 3, borderRadius: 2 }}>
      // @ts-expect-error TS(2749): 'Stack' refers to a value, but is being used as a ... Remove this comment to see the full error message
      <Stack spacing={3}>
        // @ts-expect-error TS(2749): 'Stack' refers to a value, but is being used as a ... Remove this comment to see the full error message
        <Stack spacing={3} direction="row" alignItems="center">
          // @ts-expect-error TS(2749): 'Typography' refers to a value, but is being used ... Remove this comment to see the full error message
          <Typography variant="h1"> {ratingsNumber}</Typography>

          // @ts-expect-error TS(2304): Cannot find name 'spacing'.
          <Stack spacing={0.5}>
            // @ts-expect-error TS(2749): 'Rating' refers to a value, but is being used as a... Remove this comment to see the full error message
            <Rating value={ratingsNumber} readOnly precision={0.1} />
            // @ts-expect-error TS(2749): 'Typography' refers to a value, but is being used ... Remove this comment to see the full error message
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              // @ts-expect-error TS(2304): Cannot find name 'reviews'.
              {fShortenNumber(reviewsNumber: any)} reviews
            </Typography>
          </Stack>
        </Stack>

        <RadioGroup>
          // @ts-expect-error TS(2749): 'ReviewProgress' refers to a value, but is being u... Remove this comment to see the full error message
          <ReviewProgress />
        </RadioGroup>

        <Button
          // @ts-expect-error TS(2304): Cannot find name 'size'.
          size="large"
          // @ts-expect-error TS(2304): Cannot find name 'fullWidth'.
          fullWidth
          // @ts-expect-error TS(2304): Cannot find name 'startIcon'.
          startIcon={<Iconify icon="carbon:edit" width={24} />}
          // @ts-expect-error TS(2304): Cannot find name 'onClick'.
          onClick={onOpenForm}
        >
          // @ts-expect-error TS(2304): Cannot find name 'Write'.
          Write a Review
        </Button>
      </Stack>
    </Paper>
  );
}

ReviewSummary.propTypes = {
  onOpenForm: PropTypes.func,
  ratingsNumber: PropTypes.number,
  reviewsNumber: PropTypes.number,
};
