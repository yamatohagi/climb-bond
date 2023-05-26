import PropTypes from 'prop-types';
// @mui
import { Autocomplete, InputAdornment, TextField } from '@mui/material';
// _mock
// @ts-expect-error TS(2307): Cannot find module 'src/_mock' or its correspondin... Remove this comment to see the full error message
import _mock from 'src/_mock';
// components
// @ts-expect-error TS(2307): Cannot find module 'src/components/iconify' or its... Remove this comment to see the full error message
import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

export default function CareerFilterKeyword({
  filterKeyword,
  onChangeKeyword,
  sx
}: any) {
  return (
    // @ts-expect-error TS(2749): 'Autocomplete' refers to a value, but is being use... Remove this comment to see the full error message
    <Autocomplete
      sx={{ width: 1 }}
      // @ts-expect-error TS(2552): Cannot find name 'options'. Did you mean 'Option'?
      options={_mock.jobTitle}
      // @ts-expect-error TS(2304): Cannot find name 'getOptionLabel'.
      getOptionLabel={(option) => option}
      // @ts-expect-error TS(2304): Cannot find name 'value'.
      value={filterKeyword}
      // @ts-expect-error TS(2552): Cannot find name 'onChange'. Did you mean 'onchang... Remove this comment to see the full error message
      onChange={(event, value) => onChangeKeyword(value)}
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
          placeholder="Job title, keywords..."
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
                <Iconify width={24} icon="carbon:search" sx={{ color: 'text.disabled', mr: 1 }} />
              </InputAdornment>
            ),
            // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
            sx: { pb: 1, ...sx },
          }}
        />
      )}
    />
  );
}

CareerFilterKeyword.propTypes = {
  filterKeyword: PropTypes.string,
  onChangeKeyword: PropTypes.func,
  sx: PropTypes.object,
};
