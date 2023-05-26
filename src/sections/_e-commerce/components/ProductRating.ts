import PropTypes from 'prop-types';
// @mui
import { Stack, Rating, Typography } from '@mui/material';

// ----------------------------------------------------------------------

export default function ProductRating({
  rating,
  label,
  ...other
}: any) {
  return (
    // @ts-expect-error TS(2749): 'Stack' refers to a value, but is being used as a ... Remove this comment to see the full error message
    <Stack spacing={0.5} direction="row" alignItems="center" {...other}>
      // @ts-expect-error TS(2749): 'Rating' refers to a value, but is being used as a... Remove this comment to see the full error message
      <Rating
        // @ts-expect-error TS(2304): Cannot find name 'size'.
        size="small"
        // @ts-expect-error TS(2304): Cannot find name 'value'.
        value={rating}
        // @ts-expect-error TS(2304): Cannot find name 'readOnly'.
        readOnly
        // @ts-expect-error TS(2304): Cannot find name 'precision'.
        precision={0.5}
        // @ts-expect-error TS(2304): Cannot find name 'sx'.
        sx={{ '& svg': { height: 12, width: 12 } }}
      />

      // @ts-expect-error TS(2304): Cannot find name 'label'.
      {label && (
        // @ts-expect-error TS(2749): 'Typography' refers to a value, but is being used ... Remove this comment to see the full error message
        <Typography variant="caption" sx={{ color: 'text.disabled' }}>
          // @ts-expect-error TS(18004): No value exists in scope for the shorthand propert... Remove this comment to see the full error message
          {label}
        </Typography>
      )}
    </Stack>
  );
}

ProductRating.propTypes = {
  label: PropTypes.string,
  rating: PropTypes.number,
};
