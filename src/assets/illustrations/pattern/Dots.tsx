import PropTypes from 'prop-types';
import { memo } from 'react';
// @mui
import { Box } from '@mui/material';

// ----------------------------------------------------------------------

function Dot({ size = 24, color = 'primary', sx }: any) {
  return (
    <Box
      sx={{
        width: size,
        height: size,
        zIndex: 10,
        position: 'absolute',
        borderRadius: '50%',
        background: (theme) =>
          // @ts-expect-error TS(7053): Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
          `linear-gradient(to bottom, ${theme.palette[color].light}, ${theme.palette[color].main})`,
        // @ts-expect-error TS(7053): Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
        boxShadow: (theme) => `inset 0px -2px 4px ${theme.palette[color].darker}`,
        ...sx,
      }}
    />
  );
}

Dot.propTypes = {
  color: PropTypes.string,
  size: PropTypes.number,
  sx: PropTypes.object,
};
export default memo(Dot);
