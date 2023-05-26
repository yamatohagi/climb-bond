import PropTypes from 'prop-types';
// @mui
import { Tooltip, Typography, IconButton, Checkbox, Stack } from '@mui/material';
// components
// @ts-expect-error TS(2307): Cannot find module 'src/components/iconify' or its... Remove this comment to see the full error message
import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

export default function EcommerceAccountOrdersTableToolbar({
  rowCount,
  numSelected,
  onSelectAllRows
}: any) {
  if (!numSelected) {
    return null;
  }

  return (
    // @ts-expect-error TS(2749): 'Stack' refers to a value, but is being used as a ... Remove this comment to see the full error message
    <Stack
      // @ts-expect-error TS(2304): Cannot find name 'direction'.
      direction="row"
      // @ts-expect-error TS(2304): Cannot find name 'alignItems'.
      alignItems="center"
      // @ts-expect-error TS(2304): Cannot find name 'sx'.
      sx={{
        // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
        pr: 2,
        // @ts-expect-error TS(2304): Cannot find name 'pl'.
        pl: 1,
        // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
        top: 0,
        // @ts-expect-error TS(2304): Cannot find name 'left'.
        left: 0,
        // @ts-expect-error TS(2304): Cannot find name 'width'.
        width: 1,
        // @ts-expect-error TS(2304): Cannot find name 'zIndex'.
        zIndex: 9,
        // @ts-expect-error TS(2304): Cannot find name 'height'.
        height: 58,
        // @ts-expect-error TS(2304): Cannot find name 'borderRadius'.
        borderRadius: 1,
        // @ts-expect-error TS(2304): Cannot find name 'position'.
        position: 'absolute',
        // @ts-expect-error TS(2304): Cannot find name 'bgcolor'.
        bgcolor: 'text.primary',
        // @ts-expect-error TS(2304): Cannot find name 'color'.
        color: (theme: any) => theme.palette.mode === 'light' ? 'common.white' : 'grey.800',
      }}
    >
      // @ts-expect-error TS(2749): 'Checkbox' refers to a value, but is being used as... Remove this comment to see the full error message
      <Checkbox
        // @ts-expect-error TS(2304): Cannot find name 'indeterminate'.
        indeterminate={numSelected > 0 && numSelected < rowCount}
        // @ts-expect-error TS(2304): Cannot find name 'checked'.
        checked={rowCount > 0 && numSelected === rowCount}
        // @ts-expect-error TS(2304): Cannot find name 'onChange'.
        onChange={onSelectAllRows}
        // @ts-expect-error TS(2304): Cannot find name 'inputProps'.
        inputProps={{
          // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
          'aria-label': 'select all desserts',
        }}
      // @ts-expect-error TS(2365): Operator '<' cannot be applied to types 'RegExp' a... Remove this comment to see the full error message
      />

      // @ts-expect-error TS(2304): Cannot find name 'sx'.
      <Typography sx={{ flex: '1 1 100%' }} color="inherit" variant="subtitle1" component="div">
        // @ts-expect-error TS(18004): No value exists in scope for the shorthand propert... Remove this comment to see the full error message
        {numSelected} selected
      </Typography>

      // @ts-expect-error TS(2304): Cannot find name 'title'.
      <Tooltip title="Delete">
        // @ts-expect-error TS(2749): 'IconButton' refers to a value, but is being used ... Remove this comment to see the full error message
        <IconButton color="inherit">
          // @ts-expect-error TS(2304): Cannot find name 'icon'.
          <Iconify icon="carbon:trash-can" />
        </IconButton>
      </Tooltip>
    </Stack>
  );
}

EcommerceAccountOrdersTableToolbar.propTypes = {
  numSelected: PropTypes.number,
  onSelectAllRows: PropTypes.func,
  rowCount: PropTypes.number,
};
