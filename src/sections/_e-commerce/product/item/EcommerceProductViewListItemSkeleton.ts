// @mui
import { Stack, Skeleton } from '@mui/material';

// ----------------------------------------------------------------------

export default function EcommerceProductViewListItemSkeleton() {
  return (
    // @ts-expect-error TS(2749): 'Stack' refers to a value, but is being used as a ... Remove this comment to see the full error message
    <Stack spacing={2} direction="row">
      // @ts-expect-error TS(2749): 'Skeleton' refers to a value, but is being used as... Remove this comment to see the full error message
      <Skeleton
        // @ts-expect-error TS(2304): Cannot find name 'variant'.
        variant="rounded"
        // @ts-expect-error TS(2304): Cannot find name 'width'.
        width={160}
        // @ts-expect-error TS(2304): Cannot find name 'height'.
        height={160}
        // @ts-expect-error TS(2304): Cannot find name 'sx'.
        sx={{ flexShrink: 0, borderRadius: 2 }}
      // @ts-expect-error TS(2365): Operator '<' cannot be applied to types 'RegExp' a... Remove this comment to see the full error message
      />

      // @ts-expect-error TS(2304): Cannot find name 'flexGrow'.
      <Stack flexGrow={1.5} spacing={1}>
        // @ts-expect-error TS(2749): 'Skeleton' refers to a value, but is being used as... Remove this comment to see the full error message
        <Skeleton variant="rounded" height={16} width="90%" />

        // @ts-expect-error TS(2749): 'Skeleton' refers to a value, but is being used as... Remove this comment to see the full error message
        <Skeleton variant="rounded" height={16} width="80%" />

        // @ts-expect-error TS(2749): 'Skeleton' refers to a value, but is being used as... Remove this comment to see the full error message
        <Skeleton variant="rounded" height={16} width="70%" />

        // @ts-expect-error TS(2749): 'Skeleton' refers to a value, but is being used as... Remove this comment to see the full error message
        <Skeleton variant="rounded" height={16} width="60%" />

        // @ts-expect-error TS(2749): 'Skeleton' refers to a value, but is being used as... Remove this comment to see the full error message
        <Skeleton variant="rounded" height={16} width="50%" />
      </Stack>
    </Stack>
  );
}
