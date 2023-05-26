import PropTypes from 'prop-types';
import { forwardRef } from 'react';
// @mui
import { Typography, Link } from '@mui/material';
//
import useTypography from './useTypography';

// ----------------------------------------------------------------------

const TextMaxLine = forwardRef(
  // @ts-expect-error TS(2339): Property 'asLink' does not exist on type '{}'.
  ({ asLink, variant = 'body1', line = 2, persistent = false, children, sx, ...other }, ref) => {
    const { lineHeight } = useTypography(variant);

    const styles = {
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      display: '-webkit-box',
      WebkitLineClamp: line,
      WebkitBoxOrient: 'vertical',
      ...(persistent && {
        height: lineHeight * line,
      }),
      ...sx,
    };

    if (asLink) {
      return (
        // @ts-expect-error TS(2769): No overload matches this call.
        <Link color="inherit" ref={ref} variant={variant} sx={{ ...styles }} {...other}>
          {children}
        </Link>
      );
    }

    return (
      // @ts-expect-error TS(2769): No overload matches this call.
      <Typography ref={ref} variant={variant} sx={{ ...styles }} {...other}>
        {children}
      </Typography>
    );
  }
);

TextMaxLine.propTypes = {
  // @ts-expect-error TS(2322): Type '{ sx: PropTypes.Requireable<object>; asLink:... Remove this comment to see the full error message
  sx: PropTypes.object,
  asLink: PropTypes.bool,
  line: PropTypes.number,
  persistent: PropTypes.bool,
  children: PropTypes.node,
  variant: PropTypes.oneOf([
    'body1',
    'body2',
    'button',
    'caption',
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'inherit',
    'overline',
    'subtitle1',
    'subtitle2',
  ]),
};

export default TextMaxLine;
