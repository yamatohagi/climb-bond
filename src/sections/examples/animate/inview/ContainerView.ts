import PropTypes from 'prop-types';
import { m } from 'framer-motion';
// @mui
import { Box, Paper } from '@mui/material';
// _mock
// @ts-expect-error TS(2307): Cannot find module 'src/_mock' or its correspondin... Remove this comment to see the full error message
import _mock from 'src/_mock';
// components
// @ts-expect-error TS(2307): Cannot find module 'src/components/animate' or its... Remove this comment to see the full error message
import { MotionContainer } from 'src/components/animate';
//
import getVariant from '../getVariant';

// ----------------------------------------------------------------------

const TEXT = 'Minimals';

const IMG = [
  _mock.image.travel(2),
  _mock.image.travel(3),
  _mock.image.travel(4),
  _mock.image.travel(5),
  _mock.image.travel(8),
];

export default function ContainerView({
  isText,
  isMulti,
  selectVariant,
  ...other
}: any) {
  const items = isMulti ? IMG : IMG.slice(0, 1);

  return (
    // @ts-expect-error TS(2749): 'Paper' refers to a value, but is being used as a ... Remove this comment to see the full error message
    <Paper
      // @ts-expect-error TS(2304): Cannot find name 'sx'.
      sx={{
        // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
        p: 3,
        // @ts-expect-error TS(2304): Cannot find name 'minHeight'.
        minHeight: 480,
        // @ts-expect-error TS(2304): Cannot find name 'display'.
        display: 'flex',
        // @ts-expect-error TS(2304): Cannot find name 'overflow'.
        overflow: 'hidden',
        // @ts-expect-error TS(2304): Cannot find name 'alignItems'.
        alignItems: 'center',
        // @ts-expect-error TS(2304): Cannot find name 'justifyContent'.
        justifyContent: 'center',
        // @ts-expect-error TS(2304): Cannot find name 'bgcolor'.
        bgcolor: 'background.neutral',
      }}
      // @ts-expect-error TS(2304): Cannot find name 'other'.
      {...other}
    // @ts-expect-error TS(2365): Operator '>' cannot be applied to types 'boolean' ... Remove this comment to see the full error message
    >
      // @ts-expect-error TS(2300): Duplicate identifier '(Missing)'.
      {isText ? (
        <MotionContainer
          component={m.h1}
          // @ts-expect-error TS(2300): Duplicate identifier '(Missing)'.
          sx={{ typography: 'h1', display: 'flex', overflow: 'hidden' }}
        >
          {TEXT.split('').map((letter: any, index: any) => (
            // @ts-expect-error TS(2503): Cannot find namespace 'm'.
            <m.span key={index} variants={getVariant(selectVariant: any)}>
              // @ts-expect-error TS(18004): No value exists in scope for the shorthand propert... Remove this comment to see the full error message
              {letter}
            </m.span>
          ))}
        </MotionContainer>
      ) : (
        <MotionContainer>
          // @ts-expect-error TS(18004): No value exists in scope for the shorthand propert... Remove this comment to see the full error message
          {items.map((row: any, index: any) => (
            // @ts-expect-error TS(2749): 'Box' refers to a value, but is being used as a ty... Remove this comment to see the full error message
            <Box
              // @ts-expect-error TS(2304): Cannot find name 'key'.
              key={index}
              // @ts-expect-error TS(2304): Cannot find name 'component'.
              component={m.img}
              // @ts-expect-error TS(2304): Cannot find name 'src'.
              src={row}
              // @ts-expect-error TS(2304): Cannot find name 'variants'.
              variants={getVariant(selectVariant: any)}
              // @ts-expect-error TS(2304): Cannot find name 'sx'.
              sx={{
                my: 2,
                width: 480,
                borderRadius: 1,
                objectFit: 'cover',
                // @ts-expect-error TS(2304): Cannot find name 'isMulti'.
                height: isMulti ? 72 : 320,
                boxShadow: (theme: any) => theme.customShadows.z8,
              }}
            />
          ))}
        </MotionContainer>
      )}
    </Paper>
  );
}

ContainerView.propTypes = {
  isMulti: PropTypes.bool,
  isText: PropTypes.bool,
  selectVariant: PropTypes.string,
};
