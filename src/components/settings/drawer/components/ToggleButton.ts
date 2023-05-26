import PropTypes from 'prop-types';
import { m } from 'framer-motion';
// @mui
import { Box, IconButton } from '@mui/material';
//
import Iconify from '../../../iconify';
//
import BadgeDot from './BadgeDot';

// ----------------------------------------------------------------------

export default function ToggleButton({
  open,
  notDefault,
  onToggle
}: any) {
  return (
    // @ts-expect-error TS(2749): 'Box' refers to a value, but is being used as a ty... Remove this comment to see the full error message
    <Box sx={{ position: 'relative' }}>
      // @ts-expect-error TS(18004): No value exists in scope for the shorthand propert... Remove this comment to see the full error message
      {notDefault && <BadgeDot />}
      <m.div
        // @ts-expect-error TS(2304): Cannot find name 'animate'.
        animate={{
          // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
          rotate: [0, open ? 0 : 360],
        }}
        // @ts-expect-error TS(2304): Cannot find name 'transition'.
        transition={{
          // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
          duration: 4,
          // @ts-expect-error TS(2304): Cannot find name 'ease'.
          ease: 'linear',
          // @ts-expect-error TS(2304): Cannot find name 'repeat'.
          repeat: Infinity,
        }}
      >
        // @ts-expect-error TS(2749): 'IconButton' refers to a value, but is being used ... Remove this comment to see the full error message
        <IconButton color="inherit" aria-label="settings" onClick={onToggle}>
          // @ts-expect-error TS(2749): 'Iconify' refers to a value, but is being used as ... Remove this comment to see the full error message
          <Iconify icon="carbon:settings" />
        </IconButton>
      </m.div>
    </Box>
  );
}

ToggleButton.propTypes = {
  notDefault: PropTypes.bool,
  onToggle: PropTypes.func,
  open: PropTypes.bool,
};
