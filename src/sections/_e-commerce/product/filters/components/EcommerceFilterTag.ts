// @mui
import PropTypes from 'prop-types';
import { Stack, Chip } from '@mui/material';

// ----------------------------------------------------------------------

export default function EcommerceFilterTag({
  options,
  filterTag,
  onChangeTag,
  ...other
}: any) {
  return (
    // @ts-expect-error TS(2749): 'Stack' refers to a value, but is being used as a ... Remove this comment to see the full error message
    <Stack direction="row" flexWrap="wrap" {...other}>
      // @ts-expect-error TS(2362): The left-hand side of an arithmetic operation must... Remove this comment to see the full error message
      {options.map((option: any) => {
        const selected = filterTag.includes(option);

        return (
          // @ts-expect-error TS(2749): 'Chip' refers to a value, but is being used as a t... Remove this comment to see the full error message
          <Chip
            // @ts-expect-error TS(2304): Cannot find name 'key'.
            key={option}
            // @ts-expect-error TS(2304): Cannot find name 'size'.
            size="small"
            // @ts-expect-error TS(2304): Cannot find name 'label'.
            label={option}
            // @ts-expect-error TS(2304): Cannot find name 'variant'.
            variant="outlined"
            // @ts-expect-error TS(2552): Cannot find name 'onClick'. Did you mean 'onclick'... Remove this comment to see the full error message
            onClick={() => onChangeTag(option)}
            // @ts-expect-error TS(2304): Cannot find name 'sx'.
            sx={{
              m: 0.5,
              // @ts-expect-error TS(2304): Cannot find name 'selected'.
              ...(selected && {
                bgcolor: 'action.selected',
                fontWeight: 'fontWeightBold',
              }),
            }}
          />
        );
      })}
    </Stack>
  );
}

EcommerceFilterTag.propTypes = {
  filterTag: PropTypes.array,
  onChangeTag: PropTypes.func,
  options: PropTypes.array,
};
