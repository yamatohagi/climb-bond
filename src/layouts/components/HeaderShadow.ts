import PropTypes from 'prop-types';
// @mui
import { Box } from '@mui/material';

// ----------------------------------------------------------------------

export default function HeaderShadow({
  sx,
  ...other
}: any) {
  return (
    // @ts-expect-error TS(2749): 'Box' refers to a value, but is being used as a ty... Remove this comment to see the full error message
    <Box
      sx={{
        // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
        left: 0,
        // @ts-expect-error TS(2304): Cannot find name 'right'.
        right: 0,
        // @ts-expect-error TS(2304): Cannot find name 'bottom'.
        bottom: 0,
        // @ts-expect-error TS(2304): Cannot find name 'height'.
        height: 24,
        // @ts-expect-error TS(2304): Cannot find name 'zIndex'.
        zIndex: -1,
        // @ts-expect-error TS(2304): Cannot find name 'm'.
        m: 'auto',
        // @ts-expect-error TS(2304): Cannot find name 'borderRadius'.
        borderRadius: '50%',
        // @ts-expect-error TS(2304): Cannot find name 'position'.
        position: 'absolute',
        // @ts-expect-error TS(2304): Cannot find name 'width'.
        width: `calc(100% - 48px)`,
        // @ts-expect-error TS(2304): Cannot find name 'boxShadow'.
        boxShadow: (theme: any) => theme.customShadows.z8,
        // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
        ...sx,
      }}
      // @ts-expect-error TS(2304): Cannot find name 'other'.
      {...other}
    />
  );
}

HeaderShadow.propTypes = {
  sx: PropTypes.object,
};
