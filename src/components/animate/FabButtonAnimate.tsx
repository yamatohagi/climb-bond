import PropTypes from 'prop-types';
import { m } from 'framer-motion';
import { forwardRef } from 'react';
// @mui
import { Box, Fab } from '@mui/material';

// ----------------------------------------------------------------------

// @ts-expect-error TS(2339): Property 'size' does not exist on type '{}'.
const FabButtonAnimate = forwardRef(({ size = 'large', children, sx, sxWrap, ...other }, ref) => (
  <AnimateWrap size={size} sxWrap={sxWrap}>
    // @ts-expect-error TS(2769): No overload matches this call.
    <Fab ref={ref} size={size} sx={sx} {...other}>
      {children}
    </Fab>
  </AnimateWrap>
));

FabButtonAnimate.propTypes = {
  // @ts-expect-error TS(2322): Type '{ children: PropTypes.Requireable<PropTypes.... Remove this comment to see the full error message
  children: PropTypes.node,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  sx: PropTypes.object,
  sxWrap: PropTypes.object,
};

export default FabButtonAnimate;

// ----------------------------------------------------------------------

const varSmall = {
  hover: { scale: 1.07 },
  tap: { scale: 0.97 },
};

const varMedium = {
  hover: { scale: 1.06 },
  tap: { scale: 0.98 },
};

const varLarge = {
  hover: { scale: 1.05 },
  tap: { scale: 0.99 },
};

AnimateWrap.propTypes = {
  children: PropTypes.node,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  sxWrap: PropTypes.object,
};

function AnimateWrap({ size, children, sxWrap }: any) {
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
        ...sxWrap,
      }}
    >
      {children}
    </Box>
  );
}
