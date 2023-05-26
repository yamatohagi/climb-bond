import PropTypes from 'prop-types';
import { m, useScroll, useSpring } from 'framer-motion';
// @mui
import { Box } from '@mui/material';

// ----------------------------------------------------------------------

export default function ScrollProgress({
  color = 'primary',
  size = 3,
  sx,
  ...other
}: any) {
  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    // @ts-expect-error TS(2749): 'Box' refers to a value, but is being used as a ty... Remove this comment to see the full error message
    <Box
      // @ts-expect-error TS(2304): Cannot find name 'component'.
      component={m.div}
      sx={{
        // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
        top: 0,
        // @ts-expect-error TS(2304): Cannot find name 'left'.
        left: 0,
        // @ts-expect-error TS(2304): Cannot find name 'right'.
        right: 0,
        // @ts-expect-error TS(2304): Cannot find name 'height'.
        height: size,
        // @ts-expect-error TS(2304): Cannot find name 'zIndex'.
        zIndex: 1999,
        // @ts-expect-error TS(2304): Cannot find name 'position'.
        position: 'fixed',
        // @ts-expect-error TS(2304): Cannot find name 'transformOrigin'.
        transformOrigin: '0%',
        // @ts-expect-error TS(2552): Cannot find name 'bgcolor'. Did you mean 'color'?
        bgcolor: `${color}.main`,
        // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
        ...(color === 'inherit' && {
          bgcolor: 'text.primary',
        }),
        // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
        ...sx,
      }}
      // @ts-expect-error TS(2304): Cannot find name 'style'.
      style={{ scaleX }}
      // @ts-expect-error TS(2304): Cannot find name 'other'.
      {...other}
    />
  );
}

ScrollProgress.propTypes = {
  color: PropTypes.string,
  size: PropTypes.number,
  sx: PropTypes.object,
};
