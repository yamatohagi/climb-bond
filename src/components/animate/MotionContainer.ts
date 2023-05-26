import PropTypes from 'prop-types';
import { m } from 'framer-motion';
// @mui
import { Box } from '@mui/material';
//
import { varContainer } from './variants';

// ----------------------------------------------------------------------

MotionContainer.propTypes = {
  action: PropTypes.bool,
  animate: PropTypes.bool,
  children: PropTypes.node,
};

export default function MotionContainer({
  animate,
  action = false,
  children,
  ...other
}: any) {
  if (action) {
    return (
      // @ts-expect-error TS(2749): 'Box' refers to a value, but is being used as a ty... Remove this comment to see the full error message
      <Box
        // @ts-expect-error TS(2304): Cannot find name 'component'.
        component={m.div}
        // @ts-expect-error TS(2304): Cannot find name 'initial'.
        initial={false}
        animate={animate ? 'animate' : 'exit'}
        // @ts-expect-error TS(2304): Cannot find name 'variants'.
        variants={varContainer()}
        {...other}
      // @ts-expect-error TS(2365): Operator '<' cannot be applied to types 'boolean' ... Remove this comment to see the full error message
      >
        {children}
      </Box>
    );
  }

  return (
    // @ts-expect-error TS(2749): 'Box' refers to a value, but is being used as a ty... Remove this comment to see the full error message
    <Box
      // @ts-expect-error TS(2304): Cannot find name 'component'.
      component={m.div}
      // @ts-expect-error TS(2304): Cannot find name 'initial'.
      initial="initial"
      animate="animate"
      // @ts-expect-error TS(2304): Cannot find name 'exit'.
      exit="exit"
      // @ts-expect-error TS(2304): Cannot find name 'variants'.
      variants={varContainer()}
      {...other}
    // @ts-expect-error TS(2365): Operator '<' cannot be applied to types 'boolean' ... Remove this comment to see the full error message
    >
      {children}
    </Box>
  );
}
