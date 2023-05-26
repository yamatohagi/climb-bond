import PropTypes from 'prop-types';
// @mui
import { Skeleton, Stack, Card } from '@mui/material';
// hooks
// @ts-expect-error TS(2307): Cannot find module 'src/hooks/useResponsive' or it... Remove this comment to see the full error message
import useResponsive from 'src/hooks/useResponsive';

// ----------------------------------------------------------------------

export default function ElearningCourseItemSkeleton({
  vertical,
  ...other
}: any) {
  const isSmUp = useResponsive('up', 'sm');

  const verticalStyle = vertical || !isSmUp;

  // @ts-expect-error TS(2364): The left-hand side of an assignment expression mus... Remove this comment to see the full error message
  return (
    // @ts-expect-error TS(2749): 'Card' refers to a value, but is being used as a t... Remove this comment to see the full error message
    <Card {...other}>
      // @ts-expect-error TS(2749): 'Stack' refers to a value, but is being used as a ... Remove this comment to see the full error message
      <Stack direction={verticalStyle ? 'column' : 'row'}>
        // @ts-expect-error TS(2749): 'Skeleton' refers to a value, but is being used as... Remove this comment to see the full error message
        <Skeleton
          // @ts-expect-error TS(2304): Cannot find name 'variant'.
          variant="rectangular"
          // @ts-expect-error TS(2304): Cannot find name 'sx'.
          sx={{
            // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
            width: 240,
            // @ts-expect-error TS(2304): Cannot find name 'height'.
            height: 346,
            // @ts-expect-error TS(2304): Cannot find name 'flexShrink'.
            flexShrink: 0,
            // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
            ...(verticalStyle && {
              width: 1,
            }),
          }}
        // @ts-expect-error TS(2365): Operator '<' cannot be applied to types 'RegExp' a... Remove this comment to see the full error message
        />

        // @ts-expect-error TS(2304): Cannot find name 'sx'.
        <Stack sx={{ p: 3, flexGrow: 1 }}>
          // @ts-expect-error TS(2749): 'Stack' refers to a value, but is being used as a ... Remove this comment to see the full error message
          <Stack direction="row" justifyContent="space-between" sx={{ mb: 3 }}>
            // @ts-expect-error TS(2749): 'Skeleton' refers to a value, but is being used as... Remove this comment to see the full error message
            <Skeleton variant="text" sx={{ height: 20, width: 72 }} />
            // @ts-expect-error TS(2304): Cannot find name 'variant'.
            <Skeleton variant="text" sx={{ height: 20, width: 48 }} />
          </Stack>

          // @ts-expect-error TS(2304): Cannot find name 'spacing'.
          <Stack spacing={1} flexGrow={1}>
            // @ts-expect-error TS(2362): The left-hand side of an arithmetic operation must... Remove this comment to see the full error message
            {[...Array(3)].map((_: any, index: any) => (
              // @ts-expect-error TS(2749): 'Skeleton' refers to a value, but is being used as... Remove this comment to see the full error message
              <Skeleton
                // @ts-expect-error TS(2304): Cannot find name 'key'.
                key={index}
                // @ts-expect-error TS(2304): Cannot find name 'variant'.
                variant="text"
                // @ts-expect-error TS(2304): Cannot find name 'sx'.
                sx={{
                  maxWidth: 1,
                  // @ts-expect-error TS(2304): Cannot find name 'index'.
                  height: 20 - index * 2,
                  // @ts-expect-error TS(2304): Cannot find name 'index'.
                  width: (5 - index) * 80,
                }}
              />
            ))}
          </Stack>

          // @ts-expect-error TS(2304): Cannot find name 'direction'.
          <Stack direction="row" alignItems="center" spacing={1.5} sx={{ mt: 3 }}>
            // @ts-expect-error TS(2749): 'Skeleton' refers to a value, but is being used as... Remove this comment to see the full error message
            <Skeleton variant="rectangular" sx={{ height: 16, width: 120, borderRadius: 0.5 }} />
            // @ts-expect-error TS(2304): Cannot find name 'variant'.
            <Skeleton variant="rectangular" sx={{ height: 16, width: 120, borderRadius: 0.5 }} />
          </Stack>

          // @ts-expect-error TS(2304): Cannot find name 'direction'.
          <Stack direction="row" alignItems="center" spacing={1.5} sx={{ my: 3 }}>
            // @ts-expect-error TS(2749): 'Skeleton' refers to a value, but is being used as... Remove this comment to see the full error message
            <Skeleton variant="circular" width={40} height={40} />
            // @ts-expect-error TS(2749): 'Skeleton' refers to a value, but is being used as... Remove this comment to see the full error message
            <Skeleton variant="text" sx={{ height: 20, width: 48 }} />
            // @ts-expect-error TS(2304): Cannot find name 'variant'.
            <Skeleton variant="text" sx={{ height: 20, width: 24 }} />
          </Stack>

          // @ts-expect-error TS(2304): Cannot find name 'direction'.
          <Stack direction="row" alignItems="center" spacing={1.5}>
            // @ts-expect-error TS(2749): 'Skeleton' refers to a value, but is being used as... Remove this comment to see the full error message
            <Skeleton variant="rectangular" sx={{ height: 16, width: 56, borderRadius: 0.5 }} />
            // @ts-expect-error TS(2304): Cannot find name 'variant'.
            <Skeleton variant="rectangular" sx={{ height: 16, width: 56, borderRadius: 0.5 }} />
          </Stack>
        </Stack>
      </Stack>
    </Card>
  );
}

ElearningCourseItemSkeleton.propTypes = {
  vertical: PropTypes.bool,
};
