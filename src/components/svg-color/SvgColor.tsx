import PropTypes from 'prop-types';
import { forwardRef } from 'react';
// @mui
import { Box } from '@mui/material';

// ----------------------------------------------------------------------

// @ts-expect-error TS(2339): Property 'src' does not exist on type '{}'.
const SvgColor = forwardRef(({ src, sx, ...other }, ref) => (
  <Box
    component="span"
    className="svg-color"
    ref={ref}
    sx={{
      width: 24,
      height: 24,
      display: 'inline-block',
      bgcolor: 'currentColor',
      mask: `url(${src}) no-repeat center / contain`,
      WebkitMask: `url(${src}) no-repeat center / contain`,
      ...sx,
    }}
    {...other}
  />
));

SvgColor.propTypes = {
  // @ts-expect-error TS(2322): Type '{ src: PropTypes.Requireable<string>; sx: Pr... Remove this comment to see the full error message
  src: PropTypes.string,
  sx: PropTypes.object,
};

export default SvgColor;
