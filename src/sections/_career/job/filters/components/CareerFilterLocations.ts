import PropTypes from 'prop-types';
// @mui
import { Autocomplete, InputAdornment, TextField } from '@mui/material';
// assets
// @ts-expect-error TS(2307): Cannot find module 'src/assets/data' or its corres... Remove this comment to see the full error message
import { countries } from 'src/assets/data';
// components
// @ts-expect-error TS(2307): Cannot find module 'src/components/image' or its c... Remove this comment to see the full error message
import Image from 'src/components/image';
// @ts-expect-error TS(2307): Cannot find module 'src/components/iconify' or its... Remove this comment to see the full error message
import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

export default function CareerFilterLocations({
  filterLocation,
  onChangeLocation,
  sx
}: any) {
  return (
    // @ts-expect-error TS(2749): 'Autocomplete' refers to a value, but is being use... Remove this comment to see the full error message
    <Autocomplete
      sx={{ width: 1 }}
      // @ts-expect-error TS(2552): Cannot find name 'options'. Did you mean 'Option'?
      options={countries}
      // @ts-expect-error TS(2304): Cannot find name 'getOptionLabel'.
      getOptionLabel={(option) => option.label}
      // @ts-expect-error TS(2304): Cannot find name 'value'.
      value={filterLocation}
      // @ts-expect-error TS(2552): Cannot find name 'onChange'. Did you mean 'onchang... Remove this comment to see the full error message
      onChange={(event, value) => onChangeLocation(value)}
      // @ts-expect-error TS(2304): Cannot find name 'renderInput'.
      renderInput={(params) => (
        // @ts-expect-error TS(2749): 'TextField' refers to a value, but is being used a... Remove this comment to see the full error message
        <TextField
          // @ts-expect-error TS(2304): Cannot find name 'params'.
          {...params}
          // @ts-expect-error TS(2304): Cannot find name 'hiddenLabel'.
          hiddenLabel
          // @ts-expect-error TS(2304): Cannot find name 'variant'.
          variant="filled"
          // @ts-expect-error TS(2304): Cannot find name 'placeholder'.
          placeholder="Locations"
          // @ts-expect-error TS(2304): Cannot find name 'InputProps'.
          InputProps={{
            // @ts-expect-error TS(2304): Cannot find name 'params'.
            ...params.InputProps,
            // @ts-expect-error TS(2304): Cannot find name 'autoComplete'.
            autoComplete: 'search',
            // @ts-expect-error TS(2304): Cannot find name 'startAdornment'.
            startAdornment: (
              // @ts-expect-error TS(2749): 'InputAdornment' refers to a value, but is being u... Remove this comment to see the full error message
              <InputAdornment position="start">
                // @ts-expect-error TS(2304): Cannot find name 'width'.
                <Iconify width={24} icon="carbon:location" sx={{ color: 'text.disabled', mr: 1 }} />
              </InputAdornment>
            ),
            // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
            sx: { pb: 1, ...sx },
          }}
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

CareerFilterLocations.propTypes = {
  filterLocation: PropTypes.string,
  onChangeLocation: PropTypes.func,
  sx: PropTypes.object,
};
