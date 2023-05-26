import PropTypes from 'prop-types';
import { useRef } from 'react';
import { useInView } from 'framer-motion';
import ReactCountUp from 'react-countup';
// @mui
import { Box } from '@mui/material';

// ----------------------------------------------------------------------

export default function CountUp({
  sx,
  ...other
}: any) {
  const ref = useRef(null);

  const isInView = useInView(ref, { once: true });

  return (
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <Box component="span" ref={ref} sx={sx}>
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      {isInView && <ReactCountUp duration={1} {...other} />}
    </Box>
  );
}

CountUp.propTypes = {
  sx: PropTypes.object,
};
