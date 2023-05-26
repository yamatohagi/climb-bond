import PropTypes from 'prop-types';
// @mui
import { Stack, Box } from '@mui/material';
// utils
// @ts-expect-error TS(2307): Cannot find module 'src/utils/formatTime' or its c... Remove this comment to see the full error message
import { fDate } from 'src/utils/formatTime';

// ----------------------------------------------------------------------

export default function PostTimeBlock({
  createdAt,
  duration,
  sx,
  ...other
}: any) {
  return (
    // @ts-expect-error TS(2749): 'Stack' refers to a value, but is being used as a ... Remove this comment to see the full error message
    <Stack
      // @ts-expect-error TS(2304): Cannot find name 'flexWrap'.
      flexWrap="wrap"
      // @ts-expect-error TS(2304): Cannot find name 'direction'.
      direction="row"
      // @ts-expect-error TS(2304): Cannot find name 'alignItems'.
      alignItems="center"
      // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
      sx={{ typography: 'caption', color: 'text.disabled', ...sx }}
      // @ts-expect-error TS(2304): Cannot find name 'other'.
      {...other}
    >
      {fDate(createdAt: any)}

      // @ts-expect-error TS(2304): Cannot find name 'duration'.
      {duration && (
        <>
          // @ts-expect-error TS(2749): 'Box' refers to a value, but is being used as a ty... Remove this comment to see the full error message
          <Box
            // @ts-expect-error TS(2304): Cannot find name 'component'.
            component="span"
            // @ts-expect-error TS(2304): Cannot find name 'sx'.
            sx={{
              // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
              mx: 1,
              // @ts-expect-error TS(2304): Cannot find name 'width'.
              width: 4,
              // @ts-expect-error TS(2304): Cannot find name 'height'.
              height: 4,
              // @ts-expect-error TS(2304): Cannot find name 'borderRadius'.
              borderRadius: '50%',
              // @ts-expect-error TS(2304): Cannot find name 'backgroundColor'.
              backgroundColor: 'currentColor',
            }}
          />

          // @ts-expect-error TS(2304): Cannot find name 'duration'.
          {duration}
        </>
      )}
    </Stack>
  );
}

PostTimeBlock.propTypes = {
  createdAt: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.instanceOf(Date)]),
  duration: PropTypes.string,
  sx: PropTypes.object,
};
