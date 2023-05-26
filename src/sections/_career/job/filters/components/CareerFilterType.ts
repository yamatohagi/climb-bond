import PropTypes from 'prop-types';
// @mui
import { MenuItem, Checkbox, FormControl, Typography } from '@mui/material';
import Select from '@mui/material/Select';
//
import { inputStyle, menuItemStyle, MenuProps } from '../styles';

// ----------------------------------------------------------------------

const JOB_TYPES = ['Part time', 'Full time', 'Freelance'];

// ----------------------------------------------------------------------

export default function CareerFilterType({
  filterType,
  onChangeJobType
}: any) {
  return (
    // @ts-expect-error TS(2749): 'FormControl' refers to a value, but is being used... Remove this comment to see the full error message
    <FormControl fullWidth hiddenLabel variant="filled" sx={inputStyle}>
      // @ts-expect-error TS(2749): 'Select' refers to a value, but is being used as a... Remove this comment to see the full error message
      <Select
        // @ts-expect-error TS(2304): Cannot find name 'multiple'.
        multiple
        // @ts-expect-error TS(2304): Cannot find name 'displayEmpty'.
        displayEmpty
        // @ts-expect-error TS(2304): Cannot find name 'value'.
        value={filterType}
        // @ts-expect-error TS(2552): Cannot find name 'onChange'. Did you mean 'onchang... Remove this comment to see the full error message
        onChange={onChangeJobType}
        // @ts-expect-error TS(2632): Cannot assign to 'MenuProps' because it is an impo... Remove this comment to see the full error message
        MenuProps={MenuProps}
        // @ts-expect-error TS(2304): Cannot find name 'renderValue'.
        renderValue={(selected) => {
          // @ts-expect-error TS(2304): Cannot find name 'selected'.
          if (selected.length === 0) {
            return (
              // @ts-expect-error TS(2749): 'Typography' refers to a value, but is being used ... Remove this comment to see the full error message
              <Typography variant="body2" sx={{ color: 'text.disabled' }}>
                // @ts-expect-error TS(2304): Cannot find name 'Job'.
                Job type
              </Typography>
            );
          }
          return (
            // @ts-expect-error TS(2749): 'Typography' refers to a value, but is being used ... Remove this comment to see the full error message
            <Typography variant="subtitle2" component="span">
              // @ts-expect-error TS(18004): No value exists in scope for the shorthand propert... Remove this comment to see the full error message
              {selected.join(', ')}
            </Typography>
          );
        }}
      >
        // @ts-expect-error TS(2749): 'MenuItem' refers to a value, but is being used as... Remove this comment to see the full error message
        {JOB_TYPES.map((type: any) => <MenuItem key={type} value={type} sx={menuItemStyle}>
          // @ts-expect-error TS(2749): 'Checkbox' refers to a value, but is being used as... Remove this comment to see the full error message
          <Checkbox size="small" disableRipple checked={filterType.includes(type)} />
          // @ts-expect-error TS(18004): No value exists in scope for the shorthand propert... Remove this comment to see the full error message
          {type}
        </MenuItem>)}
      </Select>
    </FormControl>
  );
}

CareerFilterType.propTypes = {
  filterType: PropTypes.array,
  onChangeJobType: PropTypes.func,
};
