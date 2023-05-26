import PropTypes from 'prop-types';
// @mui
import { Stack, Button, Select, MenuItem, Typography, FormControl } from '@mui/material';

// ----------------------------------------------------------------------

const SORT_OPTIONS = [
  { value: 'latest', label: 'Latest' },
  { value: 'oldest', label: 'Oldest' },
  { value: 'popular', label: 'Popular' },
];

const inputStyle = {
  width: { md: 140 },
  '& .MuiSelect-select': {
    py: 1.35,
  },
};

const MenuProps = {
  PaperProps: {
    sx: {
      px: 1,
    },
  },
};

// ----------------------------------------------------------------------

export default function ReviewToolbar({
  sort,
  totalReview,
  onOpenReview,
  onChangeSort
}: any) {
  return (
    // @ts-expect-error TS(2749): 'Stack' refers to a value, but is being used as a ... Remove this comment to see the full error message
    <Stack
      // @ts-expect-error TS(2304): Cannot find name 'spacing'.
      spacing={5}
      // @ts-expect-error TS(2304): Cannot find name 'alignItems'.
      alignItems={{ md: 'center' }}
      // @ts-expect-error TS(2304): Cannot find name 'direction'.
      direction={{ xs: 'column', md: 'row' }}
      // @ts-expect-error TS(2304): Cannot find name 'sx'.
      sx={{ mb: 5 }}
    >
      // @ts-expect-error TS(2749): 'Typography' refers to a value, but is being used ... Remove this comment to see the full error message
      <Typography variant="h4" sx={{ width: 1 }}>
        // @ts-expect-error TS(18004): No value exists in scope for the shorthand propert... Remove this comment to see the full error message
        {totalReview} Reviews
      </Typography>

      // @ts-expect-error TS(2304): Cannot find name 'direction'.
      <Stack direction="row" spacing={2} flexShrink={0} alignItems="center">
        // @ts-expect-error TS(2749): 'FormControl' refers to a value, but is being used... Remove this comment to see the full error message
        <FormControl hiddenLabel variant="filled" sx={inputStyle}>
          // @ts-expect-error TS(2749): 'Select' refers to a value, but is being used as a... Remove this comment to see the full error message
          <Select value={sort} onChange={onChangeSort} MenuProps={MenuProps}>
            // @ts-expect-error TS(2749): 'MenuItem' refers to a value, but is being used as... Remove this comment to see the full error message
            {SORT_OPTIONS.map((option: any) => <MenuItem key={option.value} value={option.value}>
              // @ts-expect-error TS(18004): No value exists in scope for the shorthand propert... Remove this comment to see the full error message
              {option.label}
            </MenuItem>)}
          </Select>
        </FormControl>

        // @ts-expect-error TS(2304): Cannot find name 'size'.
        <Button size="large" variant="contained" color="inherit" onClick={onOpenReview}>
          // @ts-expect-error TS(2304): Cannot find name 'Write'.
          Write a Review
        </Button>
      </Stack>
    </Stack>
  );
}

ReviewToolbar.propTypes = {
  onChangeSort: PropTypes.func,
  onOpenReview: PropTypes.func,
  sort: PropTypes.string,
  totalReview: PropTypes.number,
};
