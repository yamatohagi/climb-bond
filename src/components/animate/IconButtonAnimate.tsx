import PropTypes from 'prop-types';
import { m } from 'framer-motion';
import { forwardRef } from 'react';
// @mui
import { Box, IconButton } from '@mui/material';

// ----------------------------------------------------------------------

// @ts-expect-error TS(2339): Property 'children' does not exist on type '{}'.
const IconButtonAnimate = forwardRef(({ children, size = 'medium', ...other }, ref) => (
  <AnimateWrap size={size}>
    // @ts-expect-error TS(2769): No overload matches this call.
    <IconButton size={size} ref={ref} {...other}>
      {children}
    </IconButton>
  </AnimateWrap>
));

IconButtonAnimate.propTypes = {
  // @ts-expect-error TS(2322): Type '{ children: PropTypes.Requireable<PropTypes.... Remove this comment to see the full error message
  children: PropTypes.node,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
};

export default IconButtonAnimate;

// ----------------------------------------------------------------------

const varSmall = {
  hover: { scale: 1.1 },
  tap: { scale: 0.95 },
};

const varMedium = {
  hover: { scale: 1.09 },
  tap: { scale: 0.97 },
};

const varLarge = {
  hover: { scale: 1.08 },
  tap: { scale: 0.99 },
};

AnimateWrap.propTypes = {
  children: PropTypes.node,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
};

function AnimateWrap({ size, children }: any) {
  const isSmall = size === 'small';
  const isLarge = size === 'large';

  return (
    <Box
      component={m.div}
      whileTap="tap"
      whileHover="hover"
      variants={(isSmall && varSmall) || (isLarge && varLarge) || varMedium}
      sx={{
        display: 'inline-flex',
      }}
    >
      {children}
    </Box>
  );
}
