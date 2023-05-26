// @mui
import { Skeleton, Stack, Card, Divider, Box } from '@mui/material';

// ----------------------------------------------------------------------

export default function CareerJobItemSkeleton({ ...other }) {
  // @ts-expect-error TS(2364): The left-hand side of an assignment expression mus... Remove this comment to see the full error message
  return (
    // @ts-expect-error TS(2749): 'Card' refers to a value, but is being used as a t... Remove this comment to see the full error message
    <Card {...other}>
      // @ts-expect-error TS(2749): 'Stack' refers to a value, but is being used as a ... Remove this comment to see the full error message
      <Stack spacing={2} sx={{ p: 3 }}>
        // @ts-expect-error TS(2749): 'Skeleton' refers to a value, but is being used as... Remove this comment to see the full error message
        <Skeleton variant="circular" width={48} height={48} />

        // @ts-expect-error TS(2362): The left-hand side of an arithmetic operation must... Remove this comment to see the full error message
        {[...Array(4)].map((_: any, index: any) => (
          // @ts-expect-error TS(2749): 'Skeleton' refers to a value, but is being used as... Remove this comment to see the full error message
          <Skeleton
            // @ts-expect-error TS(2304): Cannot find name 'key'.
            key={index}
            // @ts-expect-error TS(2304): Cannot find name 'variant'.
            variant="text"
            // @ts-expect-error TS(2304): Cannot find name 'sx'.
            sx={{
              // @ts-expect-error TS(2304): Cannot find name 'index'.
              height: 20 - index * 2,
              // @ts-expect-error TS(2304): Cannot find name 'index'.
              width: (5 - index) * 50,
            }}
          />
        ))}
      </Stack>

      // @ts-expect-error TS(2304): Cannot find name 'sx'.
      <Divider sx={{ borderStyle: 'dashed' }} />

      <Box
        // @ts-expect-error TS(2304): Cannot find name 'sx'.
        sx={{
          // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
          p: 3,
          // @ts-expect-error TS(2304): Cannot find name 'gap'.
          gap: 3,
          // @ts-expect-error TS(2304): Cannot find name 'display'.
          display: 'grid',
          // @ts-expect-error TS(2304): Cannot find name 'gridTemplateColumns'.
          gridTemplateColumns: 'repeat(2, 1fr)',
        }}
      >
        // @ts-expect-error TS(2362): The left-hand side of an arithmetic operation must... Remove this comment to see the full error message
        {[...Array(4)].map((_: any, index: any) => (
          // @ts-expect-error TS(2749): 'Skeleton' refers to a value, but is being used as... Remove this comment to see the full error message
          <Skeleton
            // @ts-expect-error TS(2304): Cannot find name 'key'.
            key={index}
            // @ts-expect-error TS(2304): Cannot find name 'variant'.
            variant="rectangular"
            // @ts-expect-error TS(2304): Cannot find name 'sx'.
            sx={{ width: 1, height: 20, borderRadius: 0.5 }}
          />
        ))}
      </Box>
    </Card>
  );
}
