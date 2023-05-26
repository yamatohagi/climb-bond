import PropTypes from 'prop-types';
// @mui
import { MenuItem, Checkbox, FormControl, Typography } from '@mui/material';
import Select from '@mui/material/Select';
//
import { inputStyle, menuItemStyle, MenuProps } from '../styles';

// ----------------------------------------------------------------------

const DURATIONS = ['0 - 1 Hour', '1 - 3 Hours', '3 - 6 Hours', '6 - 18 Hours', '18+ Hours'];

// ----------------------------------------------------------------------

export default function ElearningFilterDuration({
  filterDuration,
  onChangeDuration
}: any) {
  return (
    // @ts-expect-error TS(2749): 'FormControl' refers to a value, but is being used... Remove this comment to see the full error message
    <FormControl fullWidth variant="filled" sx={inputStyle}>
      // @ts-expect-error TS(2749): 'Select' refers to a value, but is being used as a... Remove this comment to see the full error message
      <Select
        // @ts-expect-error TS(2304): Cannot find name 'multiple'.
        multiple
        // @ts-expect-error TS(2304): Cannot find name 'displayEmpty'.
        displayEmpty
        // @ts-expect-error TS(2304): Cannot find name 'value'.
        value={filterDuration}
        // @ts-expect-error TS(2552): Cannot find name 'onChange'. Did you mean 'onchang... Remove this comment to see the full error message
        onChange={onChangeDuration}
        // @ts-expect-error TS(2632): Cannot assign to 'MenuProps' because it is an impo... Remove this comment to see the full error message
        MenuProps={MenuProps}
        // @ts-expect-error TS(2304): Cannot find name 'renderValue'.
        renderValue={(selected) => {
          // @ts-expect-error TS(2304): Cannot find name 'selected'.
          if (selected.length === 0) {
            return (
              // @ts-expect-error TS(2749): 'Typography' refers to a value, but is being used ... Remove this comment to see the full error message
              <Typography variant="body2" sx={{ color: 'text.disabled' }}>
                // @ts-expect-error TS(2304): Cannot find name 'All'.
                All Duration
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
        {DURATIONS.map((duration: any) => <MenuItem key={duration} value={duration} sx={menuItemStyle}>
          // @ts-expect-error TS(2749): 'Checkbox' refers to a value, but is being used as... Remove this comment to see the full error message
          <Checkbox size="small" checked={filterDuration.includes(duration)} />
          // @ts-expect-error TS(18004): No value exists in scope for the shorthand propert... Remove this comment to see the full error message
          {duration}
        </MenuItem>)}
      </Select>
    </FormControl>
  );
}

ElearningFilterDuration.propTypes = {
  filterDuration: PropTypes.array,
  onChangeDuration: PropTypes.func,
};
