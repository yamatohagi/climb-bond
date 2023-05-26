// @mui
import { ToggleButton, Typography } from '@mui/material';
//
import Iconify from '../../../iconify';
// @ts-expect-error TS(6142): Module '../../SettingsContext' was resolved to '/U... Remove this comment to see the full error message
import { useSettingsContext } from '../../SettingsContext';

// ----------------------------------------------------------------------

export default function ModeOptions() {
  const { themeMode, onToggleMode } = useSettingsContext();

  const isLight = themeMode === 'light';

  return (
    // @ts-expect-error TS(2749): 'ToggleButton' refers to a value, but is being use... Remove this comment to see the full error message
    <ToggleButton
      // @ts-expect-error TS(2304): Cannot find name 'fullWidth'.
      fullWidth
      // @ts-expect-error TS(2304): Cannot find name 'color'.
      color={isLight ? 'standard' : 'primary'}
      // @ts-expect-error TS(2304): Cannot find name 'value'.
      value={themeMode}
      // @ts-expect-error TS(2304): Cannot find name 'selected'.
      selected={!isLight}
      // @ts-expect-error TS(2552): Cannot find name 'onChange'. Did you mean 'onchang... Remove this comment to see the full error message
      onChange={onToggleMode}
      // @ts-expect-error TS(2304): Cannot find name 'sx'.
      sx={{
        // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
        p: 3,
        // @ts-expect-error TS(2304): Cannot find name 'border'.
        border: 0,
        // @ts-expect-error TS(2304): Cannot find name 'borderRadius'.
        borderRadius: 0,
        // @ts-expect-error TS(2304): Cannot find name 'justifyContent'.
        justifyContent: 'space-between',
        '&.Mui-selected': {
          // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
          boxShadow: 'none',
          // @ts-expect-error TS(2304): Cannot find name 'bgcolor'.
          bgcolor: 'transparent',
          // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
          ...(!isLight && {
            '&:hover': {
              bgcolor: 'action.hover',
            },
          }),
        },
      }}
    >
      // @ts-expect-error TS(2749): 'Typography' refers to a value, but is being used ... Remove this comment to see the full error message
      <Typography variant="subtitle2">Mode</Typography>
      // @ts-expect-error TS(2304): Cannot find name 'width'.
      <Iconify width={28} icon={isLight ? 'carbon:asleep' : 'carbon:asleep-filled'} />
    </ToggleButton>
  );
}
