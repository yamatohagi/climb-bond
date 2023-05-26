import PropTypes from 'prop-types';
// @mui
import { Box, Autocomplete, Checkbox, TextField } from '@mui/material';
// assets
// @ts-expect-error TS(2307): Cannot find module 'src/assets/data' or its corres... Remove this comment to see the full error message
import { countries } from 'src/assets/data';

// ----------------------------------------------------------------------

export default function ElearningFilterLanguage({
  filterLanguage,
  onChangeLanguage
}: any) {
  return (
    // @ts-expect-error TS(2749): 'Autocomplete' refers to a value, but is being use... Remove this comment to see the full error message
    <Autocomplete
      // @ts-expect-error TS(2304): Cannot find name 'multiple'.
      multiple
      // @ts-expect-error TS(2304): Cannot find name 'limitTags'.
      limitTags={1}
      // @ts-expect-error TS(2304): Cannot find name 'disableCloseOnSelect'.
      disableCloseOnSelect
      // @ts-expect-error TS(2552): Cannot find name 'options'. Did you mean 'Option'?
      options={countries}
      // @ts-expect-error TS(2304): Cannot find name 'getOptionLabel'.
      getOptionLabel={(option) => option.label}
      // @ts-expect-error TS(2304): Cannot find name 'value'.
      value={filterLanguage}
      // @ts-expect-error TS(2552): Cannot find name 'onChange'. Did you mean 'onchang... Remove this comment to see the full error message
      onChange={(event, value) => onChangeLanguage(value)}
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
          placeholder="All Language"
          // @ts-expect-error TS(2304): Cannot find name 'InputProps'.
          InputProps={{
            // @ts-expect-error TS(2304): Cannot find name 'params'.
            ...params.InputProps,
            // @ts-expect-error TS(2304): Cannot find name 'autoComplete'.
            autoComplete: 'search',
            // @ts-expect-error TS(2304): Cannot find name 'sx'.
            sx: { pb: 1 },
          }}
        />
      )}
      // @ts-expect-error TS(2304): Cannot find name 'ChipProps'.
      ChipProps={{ color: 'info', size: 'small' }}
      // @ts-expect-error TS(2304): Cannot find name 'renderOption'.
      renderOption={(props, option, { selected }) => (
        // @ts-expect-error TS(2749): 'Box' refers to a value, but is being used as a ty... Remove this comment to see the full error message
        <Box component="li" {...props} sx={{ p: '0 !important' }}>
          // @ts-expect-error TS(2749): 'Checkbox' refers to a value, but is being used as... Remove this comment to see the full error message
          <Checkbox size="small" disableRipple checked={selected} />
          // @ts-expect-error TS(18004): No value exists in scope for the shorthand propert... Remove this comment to see the full error message
          {option.label}
        </Box>
      )}
    />
  );
}

ElearningFilterLanguage.propTypes = {
  filterLanguage: PropTypes.array,
  onChangeLanguage: PropTypes.func,
};
