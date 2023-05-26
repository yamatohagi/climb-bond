import PropTypes from 'prop-types';
// @mui
import { Box } from '@mui/material';

// ----------------------------------------------------------------------

export default function BadgeDot({
  sx,
  ...other
}: any) {
  return (
    // @ts-expect-error TS(2749): 'Box' refers to a value, but is being used as a ty... Remove this comment to see the full error message
    <Box
      sx={{
        // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
        top: 6,
        // @ts-expect-error TS(2304): Cannot find name 'right'.
        right: 4,
        // @ts-expect-error TS(2304): Cannot find name 'width'.
        width: 8,
        // @ts-expect-error TS(2304): Cannot find name 'height'.
        height: 8,
        // @ts-expect-error TS(2304): Cannot find name 'borderRadius'.
        borderRadius: '50%',
        // @ts-expect-error TS(2304): Cannot find name 'position'.
        position: 'absolute',
        // @ts-expect-error TS(2304): Cannot find name 'bgcolor'.
        bgcolor: 'error.main',
        // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
        ...sx,
      }}
      // @ts-expect-error TS(2304): Cannot find name 'other'.
      {...other}
    />
  );
}

BadgeDot.propTypes = {
  sx: PropTypes.object,
};
