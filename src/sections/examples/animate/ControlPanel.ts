import PropTypes from 'prop-types';
// @mui
import { Box, Radio, Paper, Typography, RadioGroup, FormControlLabel } from '@mui/material';
// components
import Scrollbar from '../../../components/scrollbar';

// ----------------------------------------------------------------------

export default function ControlPanel({
  variantKey,
  selectVariant,
  onChangeVariant,
  sx
}: any) {
  return (
    // @ts-expect-error TS(2749): 'Paper' refers to a value, but is being used as a ... Remove this comment to see the full error message
    <Paper variant="outlined" sx={{ height: 480, ...sx }}>
      // @ts-expect-error TS(2749): 'Scrollbar' refers to a value, but is being used a... Remove this comment to see the full error message
      <Scrollbar>
        // @ts-expect-error TS(2749): 'RadioGroup' refers to a value, but is being used ... Remove this comment to see the full error message
        <RadioGroup value={selectVariant} onChange={onChangeVariant} sx={{ px: 1, py: 1 }}>
          // @ts-expect-error TS(18004): No value exists in scope for the shorthand propert... Remove this comment to see the full error message
          {variantKey.map((variant: any) => <Box key={variant.type} sx={{ my: 1.5 }}>
            // @ts-expect-error TS(2749): 'Typography' refers to a value, but is being used ... Remove this comment to see the full error message
            <Typography variant="overline" sx={{ px: 1, mb: 1, display: 'block' }}>
              // @ts-expect-error TS(18004): No value exists in scope for the shorthand propert... Remove this comment to see the full error message
              {variant.type}
            </Typography>
            // @ts-expect-error TS(2304): Cannot find name 'variant'.
            {variant.values.map((value: any) => <FormControlLabel
              // @ts-expect-error TS(2304): Cannot find name 'key'.
              key={value}
              // @ts-expect-error TS(2304): Cannot find name 'value'.
              value={value}
              // @ts-expect-error TS(2304): Cannot find name 'label'.
              label={value}
              // @ts-expect-error TS(2304): Cannot find name 'control'.
              control={<Radio sx={{ display: 'none' }} />}
              // @ts-expect-error TS(2304): Cannot find name 'sx'.
              sx={{
                // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
                px: 1,
                // @ts-expect-error TS(2304): Cannot find name 'py'.
                py: 0.5,
                // @ts-expect-error TS(2304): Cannot find name 'mx'.
                mx: 0,
                // @ts-expect-error TS(2304): Cannot find name 'my'.
                my: 0.25,
                // @ts-expect-error TS(2304): Cannot find name 'width'.
                width: '100%',
                // @ts-expect-error TS(2304): Cannot find name 'borderRadius'.
                borderRadius: 0.75,
                // @ts-expect-error TS(2304): Cannot find name 'color'.
                color: 'text.secondary',
                // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
                ...(selectVariant === value && {
                  color: 'warning.contrastText',
                }),
                // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
                ...(selectVariant === value && { bgcolor: 'warning.main' }),
              }}
            // @ts-expect-error TS(2365): Operator '<' cannot be applied to types 'boolean' ... Remove this comment to see the full error message
            />)}
          </Box>)}
        </RadioGroup>
      </Scrollbar>
    </Paper>
  );
}

ControlPanel.propTypes = {
  onChangeVariant: PropTypes.func,
  selectVariant: PropTypes.string,
  sx: PropTypes.object,
  variantKey: PropTypes.array,
};
