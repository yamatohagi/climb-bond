import PropTypes from 'prop-types';
import { memo } from 'react';
// @mui
import { Box, Stack } from '@mui/material';

// ----------------------------------------------------------------------

function Label({
  icon,
  text,
  sx,
  ...other
}: any) {
  return (
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <Stack
      direction="row"
      alignItems="center"
      sx={{
        px: 2,
        py: 1.25,
        fontSize: 15,
        borderRadius: 2,
        letterSpacing: -0.5,
        color: 'common.black',
        bgcolor: 'common.white',
        fontWeight: 'fontWeightBold',
        boxShadow: (theme) =>
          `0px 24px 48px rgba(0, 0, 0, 0.8), inset 0px -4px 10px ${theme.palette.grey[600]}`,
        '& > div': { lineHeight: 0 },
        '& svg': { width: 44, height: 44 },
        ...sx,
      }}
      {...other}
    >
      {icon}
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Box sx={{ ml: 1 }}>{text}</Box>
    </Stack>
  );
}

Label.propTypes = {
  icon: PropTypes.node,
  sx: PropTypes.object,
  text: PropTypes.node,
};

export default memo(Label);
