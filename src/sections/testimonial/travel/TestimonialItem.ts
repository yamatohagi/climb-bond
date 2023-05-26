import PropTypes from 'prop-types';
// @mui
import { Typography, Stack, Box } from '@mui/material';
// components
// @ts-expect-error TS(2307): Cannot find module 'src/components/iconify' or its... Remove this comment to see the full error message
import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

TestimonialItem.propTypes = {
  sx: PropTypes.object,
  testimonial: PropTypes.object,
};

export default function TestimonialItem({
  testimonial,
  sx,
  ...other
}: any) {
  const { name, review } = testimonial;

  return (
    // @ts-expect-error TS(2749): 'Stack' refers to a value, but is being used as a ... Remove this comment to see the full error message
    <Stack
      // @ts-expect-error TS(2304): Cannot find name 'alignItems'.
      alignItems={{
        // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
        xs: 'center',
        // @ts-expect-error TS(2304): Cannot find name 'md'.
        md: 'flex-start',
      }}
      // @ts-expect-error TS(2304): Cannot find name 'sx'.
      sx={{
        textAlign: {
          // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
          xs: 'center',
          // @ts-expect-error TS(2304): Cannot find name 'md'.
          md: 'left',
        },
        // @ts-expect-error TS(2304): Cannot find name 'sx'.
        ...sx,
      }}
      // @ts-expect-error TS(2304): Cannot find name 'other'.
      {...other}
    >
      // @ts-expect-error TS(2304): Cannot find name 'width'.
      <Iconify width={48} icon="carbon:quotes" sx={{ opacity: 0.48, color: 'primary.main' }} />

      <Typography
        // @ts-expect-error TS(2304): Cannot find name 'sx'.
        sx={{
          // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
          mt: 2,
          // @ts-expect-error TS(2304): Cannot find name 'mb'.
          mb: 5,
          // @ts-expect-error TS(2304): Cannot find name 'lineHeight'.
          lineHeight: 1.75,
          // @ts-expect-error TS(2304): Cannot find name 'fontSize'.
          fontSize: { md: 20 },
        }}
      // @ts-expect-error TS(2365): Operator '<' cannot be applied to types 'boolean' ... Remove this comment to see the full error message
      >
        // @ts-expect-error TS(18004): No value exists in scope for the shorthand propert... Remove this comment to see the full error message
        {review}
      </Typography>

      // @ts-expect-error TS(2304): Cannot find name 'spacing'.
      <Stack spacing={1.5} alignItems="center" direction="row">
        // @ts-expect-error TS(2749): 'Box' refers to a value, but is being used as a ty... Remove this comment to see the full error message
        <Box sx={{ width: 8, height: 9, bgcolor: 'primary.main', borderRadius: '50%' }} />
        // @ts-expect-error TS(2304): Cannot find name 'variant'.
        <Typography variant="h6">{name}</Typography>
      </Stack>
    </Stack>
  );
}
