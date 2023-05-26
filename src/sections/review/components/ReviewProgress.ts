// @mui
import { Stack, RadioGroup } from '@mui/material';
//
import ReviewProgressItem from './ReviewProgressItem';

// ----------------------------------------------------------------------

const RATINGS = [
  { value: '5start', number: 5212 },
  { value: '4start', number: 2442 },
  { value: '3start', number: 523 },
  { value: '2start', number: 423 },
  { value: '1start', number: 80 },
];

// ----------------------------------------------------------------------

export default function ReviewProgress({ ...other }) {
  const totals = RATINGS.map((rating) => rating.number).reduce(
    (accumulator, curr) => accumulator + curr
  );

  return (
    // @ts-expect-error TS(2749): 'RadioGroup' refers to a value, but is being used ... Remove this comment to see the full error message
    <RadioGroup>
      // @ts-expect-error TS(2749): 'Stack' refers to a value, but is being used as a ... Remove this comment to see the full error message
      <Stack spacing={2} {...other}>
        {RATINGS.map((rating: any, index: any) => (
          // @ts-expect-error TS(2709): Cannot use namespace 'ReviewProgressItem' as a typ... Remove this comment to see the full error message
          <ReviewProgressItem key={rating.value} rating={rating} index={index} totals={totals} />
        ))}
      </Stack>
    </RadioGroup>
  );
}
