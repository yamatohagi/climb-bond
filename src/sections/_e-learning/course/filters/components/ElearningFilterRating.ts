import PropTypes from 'prop-types';
// @mui
import { Radio, FormControlLabel, RadioGroup, Stack, Rating } from '@mui/material';

// ----------------------------------------------------------------------

const RATINGS = ['up_4_stars', 'up_3_stars', 'up_2_stars'];

export default function ElearningFilterRating({
  filterRating,
  onChangeRating
}: any) {
  return (
    // @ts-expect-error TS(2749): 'RadioGroup' refers to a value, but is being used ... Remove this comment to see the full error message
    <RadioGroup value={filterRating} onChange={onChangeRating}>
      // @ts-expect-error TS(2749): 'Stack' refers to a value, but is being used as a ... Remove this comment to see the full error message
      <Stack spacing={2} alignItems="flex-start">
        // @ts-expect-error TS(2362): The left-hand side of an arithmetic operation must... Remove this comment to see the full error message
        {RATINGS.map((rating: any) => <FormControlLabel
          // @ts-expect-error TS(2304): Cannot find name 'key'.
          key={rating}
          // @ts-expect-error TS(2304): Cannot find name 'value'.
          value={rating}
          // @ts-expect-error TS(2304): Cannot find name 'control'.
          control={<Radio sx={{ display: 'none' }} />}
          // @ts-expect-error TS(2304): Cannot find name 'label'.
          label={
            <Stack
              // @ts-expect-error TS(2304): Cannot find name 'direction'.
              direction="row"
              // @ts-expect-error TS(2304): Cannot find name 'alignItems'.
              alignItems="center"
              // @ts-expect-error TS(2304): Cannot find name 'sx'.
              sx={{
                // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
                ...(filterRating === rating && {
                  fontWeight: 'fontWeightSemiBold',
                }),
              }}
            >
              // @ts-expect-error TS(2749): 'Rating' refers to a value, but is being used as a... Remove this comment to see the full error message
              <Rating
                // @ts-expect-error TS(2304): Cannot find name 'size'.
                size="small"
                // @ts-expect-error TS(2304): Cannot find name 'value'.
                value={3}
                // @ts-expect-error TS(2304): Cannot find name 'readOnly'.
                readOnly
                // @ts-expect-error TS(2304): Cannot find name 'sx'.
                sx={{
                  // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
                  mr: 1,
                  // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
                  ...(filterRating === rating && {
                    opacity: 0.48,
                  }),
                }}
              // @ts-expect-error TS(2362): The left-hand side of an arithmetic operation must... Remove this comment to see the full error message
              />
              // @ts-expect-error TS(2304): Cannot find name 'Up'.
              & Up
            </Stack>
          }
          // @ts-expect-error TS(2304): Cannot find name 'sx'.
          sx={{
            // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
            m: 0,
            '&:hover': { opacity: 0.48 },
          }}
        // @ts-expect-error TS(2365): Operator '<' cannot be applied to types 'boolean' ... Remove this comment to see the full error message
        />)}
      </Stack>
    </RadioGroup>
  );
}

ElearningFilterRating.propTypes = {
  filterRating: PropTypes.number,
  onChangeRating: PropTypes.func,
};
