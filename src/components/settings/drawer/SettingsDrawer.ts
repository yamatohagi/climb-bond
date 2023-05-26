// @mui
import { Box, Stack, Drawer, Divider, Typography, IconButton, Tooltip } from '@mui/material';
// config
// @ts-expect-error TS(2307): Cannot find module 'src/config-global' or its corr... Remove this comment to see the full error message
import { NAV } from 'src/config-global';
//
import Iconify from '../../iconify';
import Scrollbar from '../../scrollbar';
//
// @ts-expect-error TS(6142): Module '../SettingsContext' was resolved to '/User... Remove this comment to see the full error message
import { useSettingsContext } from '../SettingsContext';
import BadgeDot from './components/BadgeDot';
import ModeOptions from './components/ModeOptions';
import ToggleButton from './components/ToggleButton';
import DirectionOptions from './components/DirectionOptions';
import ColorPresetsOptions from './components/ColorPresetsOptions';

// ----------------------------------------------------------------------

export default function SettingsDrawer() {
  const { open, onToggle, onClose, onResetSetting, notDefault } = useSettingsContext();

  return (
    <>
      // @ts-expect-error TS(2709): Cannot use namespace 'ToggleButton' as a type.
      <ToggleButton open={open} notDefault={notDefault} onToggle={onToggle} />

      // @ts-expect-error TS(2749): 'Drawer' refers to a value, but is being used as a... Remove this comment to see the full error message
      <Drawer
        open={open}
        // @ts-expect-error TS(2304): Cannot find name 'anchor'.
        anchor="right"
        // @ts-expect-error TS(2304): Cannot find name 'PaperProps'.
        PaperProps={{
          sx: {
            width: NAV.W_DRAWER,
            // @ts-expect-error TS(2304): Cannot find name 'bgcolor'.
            bgcolor: 'background.default',
          },
        }}
        // @ts-expect-error TS(2552): Cannot find name 'onClose'. Did you mean 'onclose'... Remove this comment to see the full error message
        onClose={onClose}
      >
        // @ts-expect-error TS(2749): 'Stack' refers to a value, but is being used as a ... Remove this comment to see the full error message
        <Stack direction="row" alignItems="center" sx={{ py: 2, px: 3 }}>
          // @ts-expect-error TS(2749): 'Typography' refers to a value, but is being used ... Remove this comment to see the full error message
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            // @ts-expect-error TS(2304): Cannot find name 'Settings'.
            Settings
          </Typography>

          // @ts-expect-error TS(2304): Cannot find name 'title'.
          <Tooltip title="Reset">
            // @ts-expect-error TS(2749): 'Box' refers to a value, but is being used as a ty... Remove this comment to see the full error message
            <Box sx={{ position: 'relative' }}>
              // @ts-expect-error TS(18004): No value exists in scope for the shorthand propert... Remove this comment to see the full error message
              {notDefault && <BadgeDot />}
              // @ts-expect-error TS(2304): Cannot find name 'onClick'.
              <IconButton onClick={onResetSetting}>
                // @ts-expect-error TS(2749): 'Iconify' refers to a value, but is being used as ... Remove this comment to see the full error message
                <Iconify icon="carbon:reset" />
              </IconButton>
            </Box>
          </Tooltip>

          // @ts-expect-error TS(2304): Cannot find name 'onClick'.
          <IconButton onClick={onClose}>
            // @ts-expect-error TS(2749): 'Iconify' refers to a value, but is being used as ... Remove this comment to see the full error message
            <Iconify icon="carbon:close" />
          </IconButton>
        </Stack>

        // @ts-expect-error TS(2362): The left-hand side of an arithmetic operation must... Remove this comment to see the full error message
        <Divider />

        // @ts-expect-error TS(2749): 'Scrollbar' refers to a value, but is being used a... Remove this comment to see the full error message
        <Scrollbar>
          // @ts-expect-error TS(2749): 'Box' refers to a value, but is being used as a ty... Remove this comment to see the full error message
          <Box sx={{ pb: 10 }}>
            // @ts-expect-error TS(2749): 'ModeOptions' refers to a value, but is being used... Remove this comment to see the full error message
            <ModeOptions />

            // @ts-expect-error TS(2362): The left-hand side of an arithmetic operation must... Remove this comment to see the full error message
            <DirectionOptions />

            // @ts-expect-error TS(2749): 'ColorPresetsOptions' refers to a value, but is be... Remove this comment to see the full error message
            <ColorPresetsOptions />
          </Box>
        </Scrollbar>
      </Drawer>
    </>
  );
}
