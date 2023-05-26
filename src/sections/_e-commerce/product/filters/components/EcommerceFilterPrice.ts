import PropTypes from 'prop-types';
// @mui
import { TextField, Stack } from '@mui/material';

// ----------------------------------------------------------------------

export default function EcommerceFilterPrice({
  filterPrice,
  onChangeStartPrice,
  onChangeEndPrice,
  ...other
}: any) {
  return (
    // @ts-expect-error TS(2749): 'Stack' refers to a value, but is being used as a ... Remove this comment to see the full error message
    <Stack spacing={2} direction="row" alignItems="center" divider={<div> - </div>} {...other}>
      <TextField
        // @ts-expect-error TS(2304): Cannot find name 'size'.
        size="small"
        // @ts-expect-error TS(2304): Cannot find name 'label'.
        label="$ Min"
        // @ts-expect-error TS(2304): Cannot find name 'type'.
        type="number"
        // @ts-expect-error TS(2304): Cannot find name 'value'.
        value={filterPrice.start === 0 ? '' : filterPrice.start}
        // @ts-expect-error TS(2552): Cannot find name 'onChange'. Did you mean 'onchang... Remove this comment to see the full error message
        onChange={onChangeStartPrice}
      />
      // @ts-expect-error TS(2749): 'TextField' refers to a value, but is being used a... Remove this comment to see the full error message
      <TextField
        // @ts-expect-error TS(2304): Cannot find name 'size'.
        size="small"
        // @ts-expect-error TS(2304): Cannot find name 'label'.
        label="$ Max"
        // @ts-expect-error TS(2304): Cannot find name 'type'.
        type="number"
        // @ts-expect-error TS(2304): Cannot find name 'value'.
        value={filterPrice.end === 0 ? '' : filterPrice.end}
        // @ts-expect-error TS(2304): Cannot find name 'onChange'.
        onChange={onChangeEndPrice}
      />
    </Stack>
  );
}

EcommerceFilterPrice.propTypes = {
  filterPrice: PropTypes.shape({
    end: PropTypes.number,
    start: PropTypes.number,
  }),
  onChangeEndPrice: PropTypes.func,
  onChangeStartPrice: PropTypes.func,
};
