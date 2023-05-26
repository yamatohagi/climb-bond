// @mui
import { ToggleButton, Typography } from '@mui/material';
//
import Iconify from '../../../iconify';
// @ts-expect-error TS(6142): Module '../../SettingsContext' was resolved to '/U... Remove this comment to see the full error message
import { useSettingsContext } from '../../SettingsContext';

// ----------------------------------------------------------------------

export default function DirectionOptions() {
  const { themeDirection, onToggleDirection } = useSettingsContext();

  const isRTL = themeDirection === 'rtl';

  return (
    // @ts-expect-error TS(2749): 'ToggleButton' refers to a value, but is being use... Remove this comment to see the full error message
    <ToggleButton
      // @ts-expect-error TS(2304): Cannot find name 'fullWidth'.
      fullWidth
      // @ts-expect-error TS(2304): Cannot find name 'color'.
      color={!isRTL ? 'standard' : 'primary'}
      // @ts-expect-error TS(2304): Cannot find name 'value'.
      value={themeDirection}
      // @ts-expect-error TS(2304): Cannot find name 'selected'.
      selected={isRTL}
      // @ts-expect-error TS(2552): Cannot find name 'onChange'. Did you mean 'onchang... Remove this comment to see the full error message
      onChange={onToggleDirection}
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
          ...(isRTL && {
            '&:hover': {
              bgcolor: 'action.hover',
            },
          }),
        },
      }}
    >
      // @ts-expect-error TS(2749): 'Typography' refers to a value, but is being used ... Remove this comment to see the full error message
      <Typography variant="subtitle2">Direction</Typography>
      <Iconify
        // @ts-expect-error TS(2304): Cannot find name 'width'.
        width={28}
        // @ts-expect-error TS(2304): Cannot find name 'icon'.
        icon={isRTL ? 'carbon:align-horizontal-right' : 'carbon:align-horizontal-left'}
      />
    </ToggleButton>
  );
}
