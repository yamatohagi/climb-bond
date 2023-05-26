// @mui
import PropTypes from 'prop-types';
import { Checkbox, Stack, FormControlLabel } from '@mui/material';

// ----------------------------------------------------------------------

export default function EcommerceFilterShipping({
  options,
  filterShipping,
  onChangeShipping,
  ...other
}: any) {
  return (
    // @ts-expect-error TS(2749): 'Stack' refers to a value, but is being used as a ... Remove this comment to see the full error message
    <Stack {...other}>
      // @ts-expect-error TS(2362): The left-hand side of an arithmetic operation must... Remove this comment to see the full error message
      {options.map((option: any) => <FormControlLabel
        // @ts-expect-error TS(2304): Cannot find name 'key'.
        key={option}
        // @ts-expect-error TS(2304): Cannot find name 'control'.
        control={
          <Checkbox
            // @ts-expect-error TS(2304): Cannot find name 'size'.
            size="small"
            // @ts-expect-error TS(2304): Cannot find name 'value'.
            value={option}
            // @ts-expect-error TS(2304): Cannot find name 'checked'.
            checked={filterShipping.includes(option)}
            // @ts-expect-error TS(2552): Cannot find name 'onChange'. Did you mean 'onchang... Remove this comment to see the full error message
            onChange={() => onChangeShipping(option)}
          />
        }
        // @ts-expect-error TS(2304): Cannot find name 'label'.
        label={option}
      />)}
    </Stack>
  );
}

EcommerceFilterShipping.propTypes = {
  filterShipping: PropTypes.array,
  onChangeShipping: PropTypes.func,
  options: PropTypes.array,
};
