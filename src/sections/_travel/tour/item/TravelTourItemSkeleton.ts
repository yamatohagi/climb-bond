import { Skeleton, Stack, Card, Divider } from '@mui/material';

// ----------------------------------------------------------------------

export default function TravelTourItemSkeleton({ ...other }) {
  // @ts-expect-error TS(2364): The left-hand side of an assignment expression mus... Remove this comment to see the full error message
  return (
    // @ts-expect-error TS(2749): 'Card' refers to a value, but is being used as a t... Remove this comment to see the full error message
    <Card {...other}>
      // @ts-expect-error TS(2749): 'Skeleton' refers to a value, but is being used as... Remove this comment to see the full error message
      <Skeleton variant="rectangular" sx={{ width: 1, height: 240 }} />

      // @ts-expect-error TS(2304): Cannot find name 'spacing'.
      <Stack spacing={1} sx={{ p: 3 }}>
        // @ts-expect-error TS(2749): 'Skeleton' refers to a value, but is being used as... Remove this comment to see the full error message
        <Skeleton variant="text" sx={{ height: 20, width: 50 }} />
        // @ts-expect-error TS(2304): Cannot find name 'variant'.
        <Skeleton variant="text" sx={{ height: 20, width: 1 }} />
      </Stack>

      // @ts-expect-error TS(2304): Cannot find name 'sx'.
      <Divider sx={{ borderStyle: 'dashed' }} />

      // @ts-expect-error TS(2304): Cannot find name 'direction'.
      <Stack direction="row" justifyContent="space-between" sx={{ p: 3 }}>
        // @ts-expect-error TS(2749): 'Skeleton' refers to a value, but is being used as... Remove this comment to see the full error message
        <Skeleton variant="text" sx={{ height: 20, width: 100 }} />
        // @ts-expect-error TS(2304): Cannot find name 'variant'.
        <Skeleton variant="text" sx={{ height: 20, width: 50 }} />
      </Stack>
    </Card>
  );
}
