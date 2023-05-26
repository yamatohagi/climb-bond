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
    <Stack {...other}>
      {options.map((option: any) => (
        <FormControlLabel
          key={option}
          control={
            <Checkbox
              size="small"
              value={option}
              checked={filterShipping.includes(option)}
              onChange={() => onChangeShipping(option)}
            />
          }
          label={option}
        />
      ))}
    </Stack>
  );
}

EcommerceFilterShipping.propTypes = {
  filterShipping: PropTypes.array,
  onChangeShipping: PropTypes.func,
  options: PropTypes.array,
};
