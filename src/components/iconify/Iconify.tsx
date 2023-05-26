import PropTypes from 'prop-types';
import { forwardRef } from 'react';
import { Icon } from '@iconify/react';
// @mui
import { Box } from '@mui/material';

// ----------------------------------------------------------------------

// @ts-expect-error TS(2339): Property 'icon' does not exist on type '{}'.
const Iconify = forwardRef(({ icon, width = 20, sx, ...other }, ref) => (
  // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  <Box
    ref={ref}
    component={Icon}
    icon={icon}
    sx={{ width, height: width, flexShrink: 0, ...sx }}
    {...other}
  />
));

Iconify.propTypes = {
  // @ts-expect-error TS(2322): Type '{ icon: PropTypes.Requireable<PropTypes.Reac... Remove this comment to see the full error message
  icon: PropTypes.node,
  sx: PropTypes.object,
  width: PropTypes.number,
};

export default Iconify;
