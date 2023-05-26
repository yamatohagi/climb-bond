import PropTypes from 'prop-types';
// @mui
import { Stack, Radio, RadioGroup, FormControlLabel } from '@mui/material';
// components
// @ts-expect-error TS(2307): Cannot find module 'src/components/iconify' or its... Remove this comment to see the full error message
import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

export default function ProductColorPicker({
  value,
  options,
  onChange,
  sx
}: any) {
  return (
    // @ts-expect-error TS(2749): 'RadioGroup' refers to a value, but is being used ... Remove this comment to see the full error message
    <RadioGroup row value={value} onChange={onChange}>
      // @ts-expect-error TS(2749): 'Stack' refers to a value, but is being used as a ... Remove this comment to see the full error message
      {options.map((option: any) => <Stack
        // @ts-expect-error TS(2304): Cannot find name 'key'.
        key={option.value}
        // @ts-expect-error TS(2304): Cannot find name 'alignItems'.
        alignItems="center"
        // @ts-expect-error TS(2304): Cannot find name 'justifyContent'.
        justifyContent="center"
        sx={{
          m: 1,
          width: 32,
          height: 32,
          borderRadius: 1,
          position: 'relative',
          // @ts-expect-error TS(2552): Cannot find name 'option'. Did you mean 'options'?
          bgcolor: option.label,
          color: 'common.white',
          ...sx,
        }}
      >
        // @ts-expect-error TS(2552): Cannot find name 'option'. Did you mean 'options'?
        {value === option.value && <Iconify icon="carbon:checkmark" />}

        // @ts-expect-error TS(2749): 'FormControlLabel' refers to a value, but is being... Remove this comment to see the full error message
        <FormControlLabel
          // @ts-expect-error TS(2304): Cannot find name 'value'.
          value={option.value}
          // @ts-expect-error TS(2304): Cannot find name 'control'.
          control={<Radio sx={{ display: 'none' }} />}
          // @ts-expect-error TS(2304): Cannot find name 'label'.
          label=""
          // @ts-expect-error TS(2304): Cannot find name 'sx'.
          sx={{
            // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
            m: 0,
            // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
            top: 0,
            // @ts-expect-error TS(2304): Cannot find name 'right'.
            right: 0,
            // @ts-expect-error TS(2304): Cannot find name 'bottom'.
            bottom: 0,
            // @ts-expect-error TS(2304): Cannot find name 'left'.
            left: 0,
            // @ts-expect-error TS(2304): Cannot find name 'position'.
            position: 'absolute',
          }}
        // @ts-expect-error TS(2365): Operator '<' cannot be applied to types 'boolean' ... Remove this comment to see the full error message
        />
      </Stack>)}
    </RadioGroup>
  );
}

ProductColorPicker.propTypes = {
  onChange: PropTypes.func,
  options: PropTypes.array,
  sx: PropTypes.object,
  value: PropTypes.string,
};
