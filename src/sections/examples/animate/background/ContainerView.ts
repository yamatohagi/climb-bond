import PropTypes from 'prop-types';
import { m } from 'framer-motion';
// @mui
import { Box, Paper } from '@mui/material';
// _mock
// @ts-expect-error TS(2307): Cannot find module 'src/_mock' or its correspondin... Remove this comment to see the full error message
import _mock from 'src/_mock';
//
import getVariant from '../getVariant';

// ----------------------------------------------------------------------

export default function ContainerView({
  selectVariant,
  ...other
}: any) {
  const isKenburns = selectVariant.includes('kenburns');

  return (
    // @ts-expect-error TS(2749): 'Paper' refers to a value, but is being used as a ... Remove this comment to see the full error message
    <Paper
      // @ts-expect-error TS(2304): Cannot find name 'sx'.
      sx={{
        // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
        height: 480,
        // @ts-expect-error TS(2304): Cannot find name 'width'.
        width: '100%',
        // @ts-expect-error TS(2304): Cannot find name 'overflow'.
        overflow: 'hidden',
        // @ts-expect-error TS(2304): Cannot find name 'boxShadow'.
        boxShadow: (theme: any) => theme.customShadows.z8,
      }}
      // @ts-expect-error TS(2304): Cannot find name 'other'.
      {...other}
    >
      // @ts-expect-error TS(2349): This expression is not callable.
      {isKenburns ? (
        // @ts-expect-error TS(7006): Parameter 'Box' implicitly has an 'any' type.
        <Box
          component={m.img}
          src={_mock.image.travel(7)}
          // @ts-expect-error TS(2304): Cannot find name 'selectVariant'.
          {...getVariant(selectVariant)}
          // @ts-expect-error TS(2304): Cannot find name 'sx'.
          sx={{ width: 1, height: 1, objectFit: 'cover' }}
        />
      ) : (
        // @ts-expect-error TS(2749): 'Box' refers to a value, but is being used as a ty... Remove this comment to see the full error message
        <Box component={m.div} {...getVariant(selectVariant)} sx={{ height: 1, width: 1 }} />
      )}
    </Paper>
  );
}

ContainerView.propTypes = {
  selectVariant: PropTypes.string,
};
