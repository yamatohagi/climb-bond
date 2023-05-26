import PropTypes from 'prop-types';
// @mui
import { Stack, Rating, Button, Avatar, Typography } from '@mui/material';
// utils
// @ts-expect-error TS(2307): Cannot find module 'src/utils/formatTime' or its c... Remove this comment to see the full error message
import { fDate } from 'src/utils/formatTime';
// components
// @ts-expect-error TS(2307): Cannot find module 'src/components/iconify' or its... Remove this comment to see the full error message
import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

export default function ReviewItem({
  name,
  rating,
  message,
  postedAt,
  avatarUrl
}: any) {
  return (
    // @ts-expect-error TS(2749): 'Stack' refers to a value, but is being used as a ... Remove this comment to see the full error message
    <Stack
      // @ts-expect-error TS(2304): Cannot find name 'direction'.
      direction="row"
      // @ts-expect-error TS(2304): Cannot find name 'sx'.
      sx={{
        // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
        py: 4,
        // @ts-expect-error TS(2304): Cannot find name 'borderBottom'.
        borderBottom: (theme: any) => `solid 1px ${theme.palette.divider}`,
      }}
    >
      // @ts-expect-error TS(2749): 'Avatar' refers to a value, but is being used as a... Remove this comment to see the full error message
      <Avatar alt={name} src={avatarUrl} sx={{ width: 64, height: 64, mr: 2.5 }} />

      // @ts-expect-error TS(2304): Cannot find name 'spacing'.
      <Stack spacing={1}>
        // @ts-expect-error TS(2749): 'Rating' refers to a value, but is being used as a... Remove this comment to see the full error message
        <Rating
          // @ts-expect-error TS(2304): Cannot find name 'size'.
          size="small"
          // @ts-expect-error TS(2304): Cannot find name 'value'.
          value={rating}
          // @ts-expect-error TS(2304): Cannot find name 'precision'.
          precision={0.5}
          // @ts-expect-error TS(2304): Cannot find name 'readOnly'.
          readOnly
          // @ts-expect-error TS(2304): Cannot find name 'sx'.
          sx={{
            '& svg': { color: 'text.primary' },
          }}
        // @ts-expect-error TS(2365): Operator '<' cannot be applied to types 'RegExp' a... Remove this comment to see the full error message
        />

        // @ts-expect-error TS(2304): Cannot find name 'variant'.
        <Typography variant="subtitle1">{name}</Typography>

        // @ts-expect-error TS(2304): Cannot find name 'postedAt'.
        {postedAt && (
          // @ts-expect-error TS(2749): 'Typography' refers to a value, but is being used ... Remove this comment to see the full error message
          <Typography variant="caption" sx={{ color: 'text.disabled' }}>
            {fDate(postedAt: any)}
          </Typography>
        )}

        // @ts-expect-error TS(2749): 'Typography' refers to a value, but is being used ... Remove this comment to see the full error message
        <Typography variant="body2">{message}</Typography>

        // @ts-expect-error TS(2304): Cannot find name 'spacing'.
        <Stack spacing={1} direction={{ xs: 'column', sm: 'row' }} alignItems={{ sm: 'center' }}>
          // @ts-expect-error TS(2749): 'Typography' refers to a value, but is being used ... Remove this comment to see the full error message
          <Typography variant="subtitle2">Was this review helpful?</Typography>

          // @ts-expect-error TS(2304): Cannot find name 'direction'.
          <Stack direction="row" alignItems="center" spacing={1}>
            // @ts-expect-error TS(2749): 'Button' refers to a value, but is being used as a... Remove this comment to see the full error message
            <Button size="small" color="inherit" startIcon={<Iconify icon="carbon:thumbs-up" />}>
              // @ts-expect-error TS(2304): Cannot find name 'Yes'.
              Yes
            </Button>

            <Button
              // @ts-expect-error TS(2304): Cannot find name 'size'.
              size="small"
              // @ts-expect-error TS(2304): Cannot find name 'color'.
              color="inherit"
              // @ts-expect-error TS(2304): Cannot find name 'startIcon'.
              startIcon={
                <Iconify
                  // @ts-expect-error TS(2304): Cannot find name 'icon'.
                  icon="carbon:thumbs-up"
                  // @ts-expect-error TS(2304): Cannot find name 'sx'.
                  sx={{
                    // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
                    transform: 'scale(-1, -1)',
                  }}
                />
              }
            // @ts-expect-error TS(2365): Operator '<' cannot be applied to types 'boolean' ... Remove this comment to see the full error message
            >
              // @ts-expect-error TS(2304): Cannot find name 'No'.
              No
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}

ReviewItem.propTypes = {
  avatarUrl: PropTypes.string,
  message: PropTypes.string,
  name: PropTypes.string,
  postedAt: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.instanceOf(Date)]),
  rating: PropTypes.number,
};
