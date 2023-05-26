import PropTypes from 'prop-types';
import { m } from 'framer-motion';
// @mui
import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';
// utils
// @ts-expect-error TS(2307): Cannot find module 'src/utils/cssStyles' or its co... Remove this comment to see the full error message
import { bgBlur } from 'src/utils/cssStyles';
//
import Logo from '../logo';

// ----------------------------------------------------------------------

const StyledRoot = styled('div')(({ theme }) => ({
  ...bgBlur({
    blur: 2,
    opacity: 0.24,
    color: theme.palette.background.default,
  }),
  top: 0,
  zIndex: 9999,
  position: 'fixed',
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

// ----------------------------------------------------------------------

export default function LoadingScreen({
  sx
}: any) {
  return (
    <>
      // @ts-expect-error TS(2749): 'StyledRoot' refers to a value, but is being used ... Remove this comment to see the full error message
      <StyledRoot sx={sx}>
        // @ts-expect-error TS(2503): Cannot find namespace 'm'.
        <m.div
          // @ts-expect-error TS(2304): Cannot find name 'animate'.
          animate={{
            // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
            scale: [1, 0.96, 1, 0.96, 1],
            // @ts-expect-error TS(2304): Cannot find name 'opacity'.
            opacity: [1, 0.48, 1, 0.48, 1],
          }}
          // @ts-expect-error TS(2304): Cannot find name 'transition'.
          transition={{
            // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
            duration: 2,
            // @ts-expect-error TS(2304): Cannot find name 'ease'.
            ease: 'easeInOut',
            // @ts-expect-error TS(2304): Cannot find name 'repeatDelay'.
            repeatDelay: 1,
            // @ts-expect-error TS(2304): Cannot find name 'repeat'.
            repeat: Infinity,
          }}
        >
          // @ts-expect-error TS(2749): 'Logo' refers to a value, but is being used as a t... Remove this comment to see the full error message
          <Logo single sx={{ width: 128, height: 128 }} />
        </m.div>
      </StyledRoot>

      // @ts-expect-error TS(2304): Cannot find name 'sx'.
      <Box sx={{ width: 1, height: '100vh' }} />
    </>
  );
}

LoadingScreen.propTypes = {
  sx: PropTypes.object,
};
