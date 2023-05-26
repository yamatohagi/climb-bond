import PropTypes from 'prop-types';
import { useState } from 'react';
// @mui
import { alpha } from '@mui/material/styles';
import { CircularProgress, Dialog, IconButton } from '@mui/material';
//
import Iconify from '../iconify';
//
import { StyledReactPlayer } from './styles';

// ----------------------------------------------------------------------

export default function PlayerDialog({
  videoPath,
  open,
  onClose,
  ...other
}: any) {
  const [loading, setLoading] = useState(true);

  const onReady = () => {
    setLoading(false);
  };

  return (
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <Dialog
      fullScreen
      open={open}
      PaperProps={{
        sx: { bgcolor: 'unset' },
      }}
    >
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <IconButton
        size="large"
        onClick={onClose}
        sx={{
          top: 24,
          right: 24,
          zIndex: 9,
          position: 'fixed',
          color: (theme) => alpha(theme.palette.common.white, 0.72),
          bgcolor: (theme) => alpha(theme.palette.common.white, 0.08),
          '&:hover': {
            bgcolor: (theme) => alpha(theme.palette.common.white, 0.16),
          },
        }}
      >
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Iconify icon="carbon:close" width={24} />
      </IconButton>

      {loading && (
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <CircularProgress
          sx={{
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            m: 'auto',
            position: 'absolute',
          }}
        />
      )}

      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <StyledReactPlayer url={videoPath} playing={!loading} onReady={onReady} {...other} />
    </Dialog>
  );
}

PlayerDialog.propTypes = {
  onClose: PropTypes.func,
  open: PropTypes.bool,
  videoPath: PropTypes.string,
};
