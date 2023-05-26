import PropTypes from 'prop-types';
import { m, AnimatePresence } from 'framer-motion';
// @mui
import { Dialog, Box, Paper } from '@mui/material';
//
import { varFade } from './variants';

// ----------------------------------------------------------------------

DialogAnimate.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func,
  open: PropTypes.bool,
  sx: PropTypes.object,
  variants: PropTypes.object,
};

export default function DialogAnimate({
  open = false,
  variants,
  onClose,
  children,
  sx,
  ...other
}: any) {
  return (
    // @ts-expect-error TS(2749): 'AnimatePresence' refers to a value, but is being ... Remove this comment to see the full error message
    <AnimatePresence>
      {open && (
        // @ts-expect-error TS(2749): 'Dialog' refers to a value, but is being used as a... Remove this comment to see the full error message
        <Dialog
          // @ts-expect-error TS(2304): Cannot find name 'fullWidth'.
          fullWidth
          // @ts-expect-error TS(2304): Cannot find name 'maxWidth'.
          maxWidth="xs"
          open={open}
          onClose={onClose}
          // @ts-expect-error TS(2304): Cannot find name 'PaperComponent'.
          PaperComponent={(props) => (
            // @ts-expect-error TS(2749): 'Box' refers to a value, but is being used as a ty... Remove this comment to see the full error message
            <Box
              // @ts-expect-error TS(2304): Cannot find name 'component'.
              component={m.div}
              {...(variants ||
                varFade({
                  distance: 120,
                  durationIn: 0.32,
                  durationOut: 0.24,
                  easeIn: 'easeInOut',
                }).inUp)}
              sx={{
                // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
                width: '100%',
                // @ts-expect-error TS(2304): Cannot find name 'height'.
                height: '100%',
                // @ts-expect-error TS(2304): Cannot find name 'display'.
                display: 'flex',
                // @ts-expect-error TS(2304): Cannot find name 'alignItems'.
                alignItems: 'center',
                // @ts-expect-error TS(2304): Cannot find name 'justifyContent'.
                justifyContent: 'center',
              }}
            >
              // @ts-expect-error TS(2749): 'Box' refers to a value, but is being used as a ty... Remove this comment to see the full error message
              <Box onClick={onClose} sx={{ width: '100%', height: '100%', position: 'fixed' }} />
              // @ts-expect-error TS(2304): Cannot find name 'sx'.
              <Paper sx={sx} {...props}>
                // @ts-expect-error TS(18004): No value exists in scope for the shorthand propert... Remove this comment to see the full error message
                {props.children}
              </Paper>
            </Box>
          )}
          // @ts-expect-error TS(2304): Cannot find name 'other'.
          {...other}
        // @ts-expect-error TS(2365): Operator '<' cannot be applied to types 'boolean' ... Remove this comment to see the full error message
        >
          // @ts-expect-error TS(18004): No value exists in scope for the shorthand propert... Remove this comment to see the full error message
          {children}
        </Dialog>
      )}
    </AnimatePresence>
  );
}
