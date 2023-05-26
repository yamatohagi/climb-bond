import PropTypes from 'prop-types';
// @mui
import {
  Paper,
  Button,
  DialogTitle,
  DialogActions,
  DialogContent,
  DialogContentText,
} from '@mui/material';
// components
// @ts-expect-error TS(2307): Cannot find module 'src/components/animate' or its... Remove this comment to see the full error message
import { DialogAnimate } from 'src/components/animate';
//
import getVariant from '../getVariant';

// ----------------------------------------------------------------------

export default function ContainerView({
  isOpen,
  onOpen,
  onClose,
  selectVariant,
  ...other
}: any) {
  return (
    // @ts-expect-error TS(2749): 'Paper' refers to a value, but is being used as a ... Remove this comment to see the full error message
    <Paper
      // @ts-expect-error TS(2304): Cannot find name 'sx'.
      sx={{
        // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
        height: 480,
        // @ts-expect-error TS(2304): Cannot find name 'display'.
        display: 'flex',
        // @ts-expect-error TS(2304): Cannot find name 'alignItems'.
        alignItems: 'center',
        // @ts-expect-error TS(2304): Cannot find name 'justifyContent'.
        justifyContent: 'center',
        // @ts-expect-error TS(2304): Cannot find name 'bgcolor'.
        bgcolor: 'background.neutral',
      }}
      // @ts-expect-error TS(2304): Cannot find name 'other'.
      {...other}
    >
      // @ts-expect-error TS(2749): 'Button' refers to a value, but is being used as a... Remove this comment to see the full error message
      <Button variant="contained" onClick={onOpen}>
        // @ts-expect-error TS(2304): Cannot find name 'Click'.
        Click Me!
      </Button>
      // @ts-expect-error TS(2630): Cannot assign to 'open' because it is a function.
      <DialogAnimate open={isOpen} onClose={onClose} variants={getVariant(selectVariant: any)}>
        // @ts-expect-error TS(2749): 'DialogTitle' refers to a value, but is being used... Remove this comment to see the full error message
        <DialogTitle id="alert-dialog-title">{`Use Google's location service?`}</DialogTitle>
        <DialogContent>
          // @ts-expect-error TS(2749): 'DialogContentText' refers to a value, but is bein... Remove this comment to see the full error message
          <DialogContentText id="alert-dialog-description">
            // @ts-expect-error TS(2304): Cannot find name 'Let'.
            Let Google help apps determine location. This means sending anonymous location data to
            // @ts-expect-error TS(2304): Cannot find name 'Google'.
            Google, even when no apps are running.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          // @ts-expect-error TS(2749): 'Button' refers to a value, but is being used as a... Remove this comment to see the full error message
          <Button onClick={onClose}>Disagree</Button>
          // @ts-expect-error TS(2304): Cannot find name 'variant'.
          <Button variant="contained" onClick={onClose} autoFocus>
            // @ts-expect-error TS(2304): Cannot find name 'Agree'.
            Agree
          </Button>
        </DialogActions>
      </DialogAnimate>
    </Paper>
  );
}

ContainerView.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
  onOpen: PropTypes.func,
  selectVariant: PropTypes.string,
};
