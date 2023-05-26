// form
import { useFormContext } from 'react-hook-form';
// @mui
import { useTheme } from '@mui/material/styles';
import { Stack, Typography, Portal, Divider } from '@mui/material';
// utils
// @ts-expect-error TS(2307): Cannot find module 'src/utils/cssStyles' or its co... Remove this comment to see the full error message
import { bgBlur } from 'src/utils/cssStyles';
// hooks
// @ts-expect-error TS(2307): Cannot find module 'src/hooks/useResponsive' or it... Remove this comment to see the full error message
import useResponsive from 'src/hooks/useResponsive';

// ----------------------------------------------------------------------

export default function ValuesPreview() {
  const theme = useTheme();

  const isDesktop = useResponsive('up', 'md');

  const {
    watch,
    formState: { errors },
  } = useFormContext();

  const values = watch();

  if (!isDesktop) {
    return null;
  }

  return (
    // @ts-expect-error TS(2749): 'Portal' refers to a value, but is being used as a... Remove this comment to see the full error message
    <Portal>
      // @ts-expect-error TS(2749): 'Stack' refers to a value, but is being used as a ... Remove this comment to see the full error message
      <Stack
        // @ts-expect-error TS(2304): Cannot find name 'sx'.
        sx={{
          // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
          p: 3,
          // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
          top: 0,
          // @ts-expect-error TS(2304): Cannot find name 'right'.
          right: 0,
          // @ts-expect-error TS(2304): Cannot find name 'height'.
          height: 1,
          // @ts-expect-error TS(2304): Cannot find name 'width'.
          width: 280,
          // @ts-expect-error TS(2304): Cannot find name 'position'.
          position: 'fixed',
          // @ts-expect-error TS(2304): Cannot find name 'overflowX'.
          overflowX: 'auto',
          // @ts-expect-error TS(2304): Cannot find name 'color'.
          color: 'common.white',
          // @ts-expect-error TS(2304): Cannot find name 'zIndex'.
          zIndex: theme.zIndex.drawer,
          ...bgBlur({ color: theme.palette.grey[900] }),
        }}
      >
        // @ts-expect-error TS(2749): 'Typography' refers to a value, but is being used ... Remove this comment to see the full error message
        <Typography variant="overline" sx={{ mb: 2, color: 'success.light' }}>
          // @ts-expect-error TS(2304): Cannot find name 'Values'.
          Values
        </Typography>

        // @ts-expect-error TS(2304): Cannot find name 'values'.
        {Object.keys(values).map((value) => (
          // @ts-expect-error TS(2749): 'Stack' refers to a value, but is being used as a ... Remove this comment to see the full error message
          <Stack key={value} sx={{ typography: 'caption', mt: 0.5 }}>
            // @ts-expect-error TS(2749): 'Typography' refers to a value, but is being used ... Remove this comment to see the full error message
            <Typography variant="body2" sx={{ color: 'warning.main' }}>
              // @ts-expect-error TS(18004): No value exists in scope for the shorthand propert... Remove this comment to see the full error message
              {value} :
            </Typography>

            // @ts-expect-error TS(2304): Cannot find name 'values'.
            {parseValue(values, value)}
          </Stack>
        ))}

        // @ts-expect-error TS(2749): 'Divider' refers to a value, but is being used as ... Remove this comment to see the full error message
        <Divider sx={{ my: 2 }} />

        // @ts-expect-error TS(2304): Cannot find name 'variant'.
        <Typography variant="overline" sx={{ mb: 2, color: 'error.light' }}>
          // @ts-expect-error TS(2304): Cannot find name 'Errors'.
          Errors
        </Typography>

        // @ts-expect-error TS(2304): Cannot find name 'variant'.
        <Typography variant="caption" sx={{ color: 'error.light' }}>
          // @ts-expect-error TS(2304): Cannot find name 'errors'.
          {JSON.stringify(Object.keys(errors), null, 2)}
        </Typography>
      </Stack>
    </Portal>
  );
}

// ----------------------------------------------------------------------

function parseValue(values: any, value: any) {
  return JSON.stringify(values[value]) || '---';
}
