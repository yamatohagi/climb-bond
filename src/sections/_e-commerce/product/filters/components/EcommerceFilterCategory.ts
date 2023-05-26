import PropTypes from 'prop-types';
// @mui
import { Stack } from '@mui/material';
// components
// @ts-expect-error TS(2307): Cannot find module 'src/components/iconify' or its... Remove this comment to see the full error message
import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

export default function EcommerceFilterCategory({
  options,
  filterCategories,
  onChangeCategories,
  ...other
}: any) {
  return (
    // @ts-expect-error TS(2749): 'Stack' refers to a value, but is being used as a ... Remove this comment to see the full error message
    <Stack spacing={1} alignItems="flex-start" {...other}>
      // @ts-expect-error TS(2749): 'Stack' refers to a value, but is being used as a ... Remove this comment to see the full error message
      {options.map((option: any) => <Stack
        // @ts-expect-error TS(2304): Cannot find name 'key'.
        key={option}
        // @ts-expect-error TS(2304): Cannot find name 'direction'.
        direction="row"
        // @ts-expect-error TS(2304): Cannot find name 'alignItems'.
        alignItems="center"
        // @ts-expect-error TS(2552): Cannot find name 'onClick'. Did you mean 'onclick'... Remove this comment to see the full error message
        onClick={() => onChangeCategories(option)}
        // @ts-expect-error TS(2304): Cannot find name 'sx'.
        sx={{
          // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
          typography: 'body2',
          // @ts-expect-error TS(2304): Cannot find name 'cursor'.
          cursor: 'pointer',
          // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
          ...(filterCategories === option && {
            fontWeight: 'fontWeightBold',
          }),
        }}
      >
        // @ts-expect-error TS(2304): Cannot find name 'icon'.
        <Iconify icon="carbon:chevron-right" width={12} sx={{ mr: 1 }} />
        // @ts-expect-error TS(2304): Cannot find name 'option'.
        {option}
      </Stack>)}
    </Stack>
  );
}

EcommerceFilterCategory.propTypes = {
  filterCategories: PropTypes.string,
  onChangeCategories: PropTypes.func,
  options: PropTypes.array,
};
