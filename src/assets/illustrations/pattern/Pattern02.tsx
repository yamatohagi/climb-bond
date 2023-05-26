import PropTypes from 'prop-types';
import { memo } from 'react';
import { m } from 'framer-motion';
// @mui
import { Box } from '@mui/material';
//
// @ts-expect-error TS(6142): Module './Dots' was resolved to '/Users/yamatohagi... Remove this comment to see the full error message
import Dot from './Dots';
// @ts-expect-error TS(6142): Module './Circle' was resolved to '/Users/yamatoha... Remove this comment to see the full error message
import Circle from './Circle';

// ----------------------------------------------------------------------

const animateDown = (duration = 60) => ({
  animate: { rotate: [360, 0] },
  transition: { duration, repeat: Infinity, ease: 'linear' },
});

const animateUp = (duration = 60) => ({
  animate: { rotate: [0, 360] },
  transition: { duration, repeat: Infinity, ease: 'linear' },
});

function Pattern02({
  sx,
  ...other
}: any) {
  return (
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <Box
      sx={{
        width: 1,
        height: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        ...sx,
      }}
      {...other}
    >
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Circle hide component={m.div} {...animateDown()}>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Dot sx={{ left: -12, top: '50%', mt: -1.5 }} />
      </Circle>

      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Circle hide component={m.div} {...animateUp(80)}>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Dot size={16} color="secondary" sx={{ top: 80, left: 42 }} />
      </Circle>

      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Circle hide component={m.div} {...animateUp(100)}>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Dot size={14} color="success" sx={{ top: 22, left: 112 }} />
      </Circle>

      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Circle component={m.div} {...animateDown(120)}>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Dot size={12} color="warning" sx={{ top: 54, right: 70 }} />
      </Circle>
    </Box>
  );
}

Pattern02.propTypes = {
  sx: PropTypes.object,
};

export default memo(Pattern02);
