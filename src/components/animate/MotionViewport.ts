import PropTypes from 'prop-types';
import { m } from 'framer-motion';
// @mui
import { Box } from '@mui/material';
// hooks
import useResponsive from '../../hooks/useResponsive';
//
import { varContainer } from './variants';

// ----------------------------------------------------------------------

MotionViewport.propTypes = {
  children: PropTypes.node,
  disableAnimatedMobile: PropTypes.bool,
};

export default function MotionViewport({
  children,
  disableAnimatedMobile = true,
  ...other
}: any) {
  // @ts-expect-error TS(2554): Expected 3 arguments, but got 2.
  const isMobile = useResponsive('down', 'sm');

  if (isMobile && disableAnimatedMobile) {
    // @ts-expect-error TS(2365): Operator '<' cannot be applied to types 'boolean' ... Remove this comment to see the full error message
    return <Box {...other}>{children}</Box>;
  }

  return (
    // @ts-expect-error TS(2749): 'Box' refers to a value, but is being used as a ty... Remove this comment to see the full error message
    <Box
      // @ts-expect-error TS(2304): Cannot find name 'component'.
      component={m.div}
      // @ts-expect-error TS(2304): Cannot find name 'initial'.
      initial="initial"
      // @ts-expect-error TS(2304): Cannot find name 'whileInView'.
      whileInView="animate"
      // @ts-expect-error TS(2304): Cannot find name 'viewport'.
      viewport={{ once: true, amount: 0.3 }}
      // @ts-expect-error TS(2304): Cannot find name 'variants'.
      variants={varContainer()}
      // @ts-expect-error TS(2304): Cannot find name 'other'.
      {...other}
    // @ts-expect-error TS(2365): Operator '<' cannot be applied to types 'boolean' ... Remove this comment to see the full error message
    >
      // @ts-expect-error TS(18004): No value exists in scope for the shorthand propert... Remove this comment to see the full error message
      {children}
    </Box>
  );
}
