import PropTypes from 'prop-types';
import { m } from 'framer-motion';
// @mui
import { Box } from '@mui/material';
//
import { varFade } from './variants';

// ----------------------------------------------------------------------

TextAnimate.propTypes = {
  sx: PropTypes.object,
  text: PropTypes.string,
  variants: PropTypes.object,
};

export default function TextAnimate({
  text,
  variants,
  sx,
  ...other
}: any) {
  return (
    // @ts-expect-error TS(2749): 'Box' refers to a value, but is being used as a ty... Remove this comment to see the full error message
    <Box
      // @ts-expect-error TS(2304): Cannot find name 'component'.
      component={m.div}
      sx={{
        // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
        m: 0,
        // @ts-expect-error TS(2304): Cannot find name 'typography'.
        typography: 'h1',
        // @ts-expect-error TS(2304): Cannot find name 'overflow'.
        overflow: 'hidden',
        // @ts-expect-error TS(2304): Cannot find name 'display'.
        display: 'inline-flex',
        // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
        ...sx,
      }}
      // @ts-expect-error TS(2304): Cannot find name 'other'.
      {...other}
    // @ts-expect-error TS(2365): Operator '>' cannot be applied to types 'boolean' ... Remove this comment to see the full error message
    >
      // @ts-expect-error TS(2552): Cannot find name 'text'. Did you mean 'Text'?
      {text.split('').map((letter: any, index: any) => (
        // @ts-expect-error TS(2503): Cannot find namespace 'm'.
        <m.span key={index} variants={variants || varFade().inUp}>
          // @ts-expect-error TS(18004): No value exists in scope for the shorthand propert... Remove this comment to see the full error message
          {letter}
        </m.span>
      ))}
    </Box>
  );
}
