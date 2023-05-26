import PropTypes from 'prop-types';
// @mui
import { Stack, Container } from '@mui/material';
// hooks
// @ts-expect-error TS(2307): Cannot find module 'src/hooks/useOffSetTop' or its... Remove this comment to see the full error message
import useOffSetTop from 'src/hooks/useOffSetTop';
//
import Header from './Header';

// ----------------------------------------------------------------------

export default function CompactLayout({
  children
}: any) {
  const isOffset = useOffSetTop();

  return (
    <>
      // @ts-expect-error TS(2709): Cannot use namespace 'Header' as a type.
      <Header isOffset={isOffset} />

      // @ts-expect-error TS(2749): 'Container' refers to a value, but is being used a... Remove this comment to see the full error message
      <Container component="main">
        // @ts-expect-error TS(2749): 'Stack' refers to a value, but is being used as a ... Remove this comment to see the full error message
        <Stack
          // @ts-expect-error TS(2304): Cannot find name 'sx'.
          sx={{
            // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
            py: 12,
            // @ts-expect-error TS(2304): Cannot find name 'm'.
            m: 'auto',
            // @ts-expect-error TS(2304): Cannot find name 'maxWidth'.
            maxWidth: 480,
            // @ts-expect-error TS(2304): Cannot find name 'minHeight'.
            minHeight: '100vh',
            // @ts-expect-error TS(2304): Cannot find name 'textAlign'.
            textAlign: 'center',
            // @ts-expect-error TS(2304): Cannot find name 'justifyContent'.
            justifyContent: 'center',
          }}
        // @ts-expect-error TS(2365): Operator '<' cannot be applied to types 'boolean' ... Remove this comment to see the full error message
        >
          {children}
        </Stack>
      </Container>
    </>
  );
}

CompactLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
