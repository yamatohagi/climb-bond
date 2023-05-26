import PropTypes from 'prop-types';
// @mui
import { Box, Stack, Typography } from '@mui/material';
// components
// @ts-expect-error TS(2307): Cannot find module 'src/components/markdown' or it... Remove this comment to see the full error message
import Markdown from 'src/components/markdown';

// ----------------------------------------------------------------------

export default function EcommerceProductDetailsDescription({
  description,
  specifications
}: any) {
  return (
    // @ts-expect-error TS(2749): 'Stack' refers to a value, but is being used as a ... Remove this comment to see the full error message
    <Stack
      // @ts-expect-error TS(2304): Cannot find name 'spacing'.
      spacing={4}
      // @ts-expect-error TS(2304): Cannot find name 'sx'.
      sx={{
        // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
        py: { xs: 5, md: 10 },
      }}
    >
      // @ts-expect-error TS(2749): 'Stack' refers to a value, but is being used as a ... Remove this comment to see the full error message
      <Stack spacing={2}>
        // @ts-expect-error TS(2749): 'Typography' refers to a value, but is being used ... Remove this comment to see the full error message
        <Typography variant="h6"> Specifications </Typography>

        // @ts-expect-error TS(2304): Cannot find name 'specifications'.
        {specifications.map((row: any) => <Stack
          // @ts-expect-error TS(2304): Cannot find name 'key'.
          key={row.label}
          // @ts-expect-error TS(2304): Cannot find name 'spacing'.
          spacing={0.5}
          // @ts-expect-error TS(2304): Cannot find name 'direction'.
          direction={{ xs: 'column', sm: 'row' }}
          // @ts-expect-error TS(2304): Cannot find name 'alignItems'.
          alignItems={{ sm: 'center' }}
          // @ts-expect-error TS(2304): Cannot find name 'sx'.
          sx={{ typography: 'body2' }}
        >
          // @ts-expect-error TS(2749): 'Box' refers to a value, but is being used as a ty... Remove this comment to see the full error message
          <Box component="span" sx={{ width: 160, color: 'text.secondary' }}>
            // @ts-expect-error TS(18004): No value exists in scope for the shorthand propert... Remove this comment to see the full error message
            {row.label}
          </Box>
          // @ts-expect-error TS(2304): Cannot find name 'component'.
          <Box component="span">{row.value}</Box>
        </Stack>)}
      </Stack>

      <Stack>
        // @ts-expect-error TS(2749): 'Typography' refers to a value, but is being used ... Remove this comment to see the full error message
        <Typography variant="h6"> Description </Typography>
        // @ts-expect-error TS(2304): Cannot find name 'content'.
        <Markdown content={description} sx={{ '& p, ul': { typography: 'body2' } }} />
      </Stack>
    </Stack>
  );
}

EcommerceProductDetailsDescription.propTypes = {
  description: PropTypes.string,
  specifications: PropTypes.array,
};
