import PropTypes from 'prop-types';
// @mui
import { Switch, FormControlLabel } from '@mui/material';

// ----------------------------------------------------------------------

export default function EcommerceFilterStock({
  filterStock,
  onChangeStock
}: any) {
  return (
    // @ts-expect-error TS(2749): 'FormControlLabel' refers to a value, but is being... Remove this comment to see the full error message
    <FormControlLabel
      // @ts-expect-error TS(2304): Cannot find name 'control'.
      control={<Switch color="success" checked={filterStock} onChange={onChangeStock} />}
      // @ts-expect-error TS(2304): Cannot find name 'labelPlacement'.
      labelPlacement="start"
      // @ts-expect-error TS(2304): Cannot find name 'label'.
      label="Only in Stock"
      // @ts-expect-error TS(2304): Cannot find name 'sx'.
      sx={{
        // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
        m: 0,
        '& .MuiFormControlLabel-label': { typography: 'h6' },
      }}
    />
  );
}

EcommerceFilterStock.propTypes = {
  filterStock: PropTypes.bool,
  onChangeStock: PropTypes.func,
};
