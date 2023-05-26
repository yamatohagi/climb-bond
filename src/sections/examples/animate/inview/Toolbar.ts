import PropTypes from 'prop-types';
// @mui
import { Box, Paper, FormControlLabel, Switch, IconButton } from '@mui/material';
// components
// @ts-expect-error TS(2307): Cannot find module 'src/components/iconify' or its... Remove this comment to see the full error message
import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

export default function Toolbar({
  isText,
  isMulti,
  onChangeText,
  onChangeMulti,
  onRefresh,
  ...other
}: any) {
  return (
    // @ts-expect-error TS(2749): 'Paper' refers to a value, but is being used as a ... Remove this comment to see the full error message
    <Paper
      // @ts-expect-error TS(2304): Cannot find name 'sx'.
      sx={{
        // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
        display: 'flex',
        // @ts-expect-error TS(2304): Cannot find name 'alignItems'.
        alignItems: 'center',
        // @ts-expect-error TS(2304): Cannot find name 'justifyContent'.
        justifyContent: 'space-between',
      }}
      // @ts-expect-error TS(2304): Cannot find name 'other'.
      {...other}
    >
      // @ts-expect-error TS(2749): 'FormControlLabel' refers to a value, but is being... Remove this comment to see the full error message
      <FormControlLabel
        // @ts-expect-error TS(2304): Cannot find name 'control'.
        control={<Switch checked={isText} onChange={onChangeText} />}
        // @ts-expect-error TS(2304): Cannot find name 'label'.
        label="Text Object"
      />

      // @ts-expect-error TS(2749): 'Box' refers to a value, but is being used as a ty... Remove this comment to see the full error message
      <Box sx={{ flexGrow: 1 }} />

      // @ts-expect-error TS(2304): Cannot find name 'isText'.
      {!isText && (
        // @ts-expect-error TS(2749): 'FormControlLabel' refers to a value, but is being... Remove this comment to see the full error message
        <FormControlLabel
          // @ts-expect-error TS(2304): Cannot find name 'control'.
          control={<Switch checked={isMulti} onChange={onChangeMulti} />}
          // @ts-expect-error TS(2304): Cannot find name 'label'.
          label="Multi Item"
        />
      )}

      // @ts-expect-error TS(2749): 'IconButton' refers to a value, but is being used ... Remove this comment to see the full error message
      <IconButton onClick={onRefresh}>
        // @ts-expect-error TS(2304): Cannot find name 'icon'.
        <Iconify icon="eva:refresh-fill" />
      </IconButton>
    </Paper>
  );
}

Toolbar.propTypes = {
  isMulti: PropTypes.bool,
  isText: PropTypes.bool,
  onChangeMulti: PropTypes.func,
  onChangeText: PropTypes.func,
  onRefresh: PropTypes.func,
};
