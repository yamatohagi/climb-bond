// @mui
import { Stack, Box, Skeleton } from '@mui/material';

// ----------------------------------------------------------------------

export default function EcommerceProductViewGridItemSkeleton() {
  return (
    // @ts-expect-error TS(2749): 'Stack' refers to a value, but is being used as a ... Remove this comment to see the full error message
    <Stack spacing={2}>
      // @ts-expect-error TS(2749): 'Box' refers to a value, but is being used as a ty... Remove this comment to see the full error message
      <Box
        // @ts-expect-error TS(2304): Cannot find name 'sx'.
        sx={{
          // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
          pt: '100%',
          // @ts-expect-error TS(2304): Cannot find name 'flexShrink'.
          flexShrink: 0,
          // @ts-expect-error TS(2304): Cannot find name 'borderRadius'.
          borderRadius: 2,
          // @ts-expect-error TS(2304): Cannot find name 'position'.
          position: 'relative',
        }}
      >
        // @ts-expect-error TS(2749): 'Skeleton' refers to a value, but is being used as... Remove this comment to see the full error message
        <Skeleton
          // @ts-expect-error TS(2304): Cannot find name 'variant'.
          variant="rounded"
          // @ts-expect-error TS(2304): Cannot find name 'width'.
          width="100%"
          // @ts-expect-error TS(2304): Cannot find name 'height'.
          height="100%"
          // @ts-expect-error TS(2304): Cannot find name 'sx'.
          sx={{ position: 'absolute', top: 0, left: 0 }}
        // @ts-expect-error TS(2365): Operator '<' cannot be applied to types 'boolean' ... Remove this comment to see the full error message
        />
      </Box>

      // @ts-expect-error TS(2304): Cannot find name 'spacing'.
      <Stack spacing={1}>
        // @ts-expect-error TS(2749): 'Skeleton' refers to a value, but is being used as... Remove this comment to see the full error message
        <Skeleton variant="rounded" height={16} width="90%" />

        // @ts-expect-error TS(2749): 'Skeleton' refers to a value, but is being used as... Remove this comment to see the full error message
        <Skeleton variant="rounded" height={16} width="70%" />

        // @ts-expect-error TS(2749): 'Skeleton' refers to a value, but is being used as... Remove this comment to see the full error message
        <Skeleton variant="rounded" height={16} width="50%" />
      </Stack>
    </Stack>
  );
}
