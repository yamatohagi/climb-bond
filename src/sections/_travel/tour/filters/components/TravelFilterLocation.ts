// @mui
import { Autocomplete, InputAdornment, InputBase } from '@mui/material';
// assets
// @ts-expect-error TS(2307): Cannot find module 'src/assets/data' or its corres... Remove this comment to see the full error message
import { countries } from 'src/assets/data';
// components
// @ts-expect-error TS(2307): Cannot find module 'src/components/image' or its c... Remove this comment to see the full error message
import Image from 'src/components/image';
// @ts-expect-error TS(2307): Cannot find module 'src/components/iconify' or its... Remove this comment to see the full error message
import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

export default function TravelFilterLocation() {
  return (
    // @ts-expect-error TS(2749): 'Autocomplete' refers to a value, but is being use... Remove this comment to see the full error message
    <Autocomplete
      // @ts-expect-error TS(2304): Cannot find name 'sx'.
      sx={{ width: 1 }}
      // @ts-expect-error TS(2304): Cannot find name 'popupIcon'.
      popupIcon={null}
      // @ts-expect-error TS(2552): Cannot find name 'options'. Did you mean 'Option'?
      options={countries}
      // @ts-expect-error TS(2304): Cannot find name 'getOptionLabel'.
      getOptionLabel={(option) => option.label}
      // @ts-expect-error TS(2304): Cannot find name 'renderInput'.
      renderInput={(params) => (
        // @ts-expect-error TS(2749): 'InputBase' refers to a value, but is being used a... Remove this comment to see the full error message
        <InputBase
          // @ts-expect-error TS(2304): Cannot find name 'params'.
          {...params.InputProps}
          // @ts-expect-error TS(2304): Cannot find name 'inputProps'.
          inputProps={params.inputProps}
          // @ts-expect-error TS(2304): Cannot find name 'fullWidth'.
          fullWidth
          // @ts-expect-error TS(2304): Cannot find name 'placeholder'.
          placeholder="Where we go?"
          // @ts-expect-error TS(2304): Cannot find name 'startAdornment'.
          startAdornment={
            // @ts-expect-error TS(2304): Cannot find name 'position'.
            <InputAdornment position="start">
              // @ts-expect-error TS(2304): Cannot find name 'width'.
              <Iconify width={24} icon="carbon:location" sx={{ color: 'text.disabled', mr: 1 }} />
            </InputAdornment>
          }
          // @ts-expect-error TS(2304): Cannot find name 'sx'.
          sx={{ height: 44, typography: 'subtitle1', color: 'inherit' }}
        />
      )}
      // @ts-expect-error TS(2304): Cannot find name 'renderOption'.
      renderOption={(props, option) => (
        // @ts-expect-error TS(2304): Cannot find name 'li'.
        <li {...props}>
          <Image
            // @ts-expect-error TS(2304): Cannot find name 'disabledEffect'.
            disabledEffect
            // @ts-expect-error TS(2304): Cannot find name 'alt'.
            alt="flag country"
            // @ts-expect-error TS(2304): Cannot find name 'src'.
            src={`https://flagcdn.com/${option.code.toLowerCase()}.svg`}
            // @ts-expect-error TS(2304): Cannot find name 'sx'.
            sx={{ mr: 1, width: 24, height: 24, flexShrink: 0, borderRadius: '50%' }}
          />
          // @ts-expect-error TS(2304): Cannot find name 'option'.
          {option.label}
        </li>
      )}
    />
  );
}
