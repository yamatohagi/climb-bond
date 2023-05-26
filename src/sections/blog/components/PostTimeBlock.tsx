import PropTypes from 'prop-types';
// @mui
import { Stack, Box } from '@mui/material';
// utils
import { fDate } from 'src/utils/formatTime';

// ----------------------------------------------------------------------

export default function PostTimeBlock({ createdAt, duration, sx, ...other }: any) {
  return (
    <Stack
      flexWrap="wrap"
      direction="row"
      alignItems="center"
      sx={{ typography: 'caption', color: 'text.disabled', ...sx }}
      {...other}
    >
      {fDate(createdAt, false)}

      {duration && (
        <>
          <Box
            component="span"
            sx={{
              mx: 1,
              width: 4,
              height: 4,
              borderRadius: '50%',
              backgroundColor: 'currentColor',
            }}
          />

          {duration}
        </>
      )}
    </Stack>
  );
}

PostTimeBlock.propTypes = {
  createdAt: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.instanceOf(Date)]),
  duration: PropTypes.string,
  sx: PropTypes.object,
};
