import PropTypes from 'prop-types';
// @mui
import { Typography, Stack, Avatar } from '@mui/material';

// ----------------------------------------------------------------------

export default function TestimonialItem({
  testimonial,
  ...other
}: any) {
  const { name, role, avatar, review } = testimonial;

  return (
    // @ts-expect-error TS(2749): 'Stack' refers to a value, but is being used as a ... Remove this comment to see the full error message
    <Stack
      // @ts-expect-error TS(2304): Cannot find name 'spacing'.
      spacing={{
        // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
        xs: 5,
        // @ts-expect-error TS(2304): Cannot find name 'md'.
        md: 10,
      }}
      // @ts-expect-error TS(2304): Cannot find name 'direction'.
      direction={{
        // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
        xs: 'column',
        // @ts-expect-error TS(2304): Cannot find name 'md'.
        md: 'row',
      }}
      // @ts-expect-error TS(2304): Cannot find name 'other'.
      {...other}
    >
      // @ts-expect-error TS(2749): 'Typography' refers to a value, but is being used ... Remove this comment to see the full error message
      <Typography
        // @ts-expect-error TS(2304): Cannot find name 'sx'.
        sx={{
          fontSize: { md: 20 },
          // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
          lineHeight: 1.75,
          // @ts-expect-error TS(2304): Cannot find name 'textAlign'.
          textAlign: { xs: 'center', md: 'left' },
        }}
      // @ts-expect-error TS(2365): Operator '<' cannot be applied to types 'boolean' ... Remove this comment to see the full error message
      >
        // @ts-expect-error TS(18004): No value exists in scope for the shorthand propert... Remove this comment to see the full error message
        {review}
      </Typography>

      // @ts-expect-error TS(2304): Cannot find name 'sx'.
      <Stack sx={{ flexShrink: 0, textAlign: 'center' }}>
        // @ts-expect-error TS(2749): 'Avatar' refers to a value, but is being used as a... Remove this comment to see the full error message
        <Avatar alt={name} src={avatar} sx={{ width: 96, height: 96, mx: 'auto' }} />

        // @ts-expect-error TS(2304): Cannot find name 'variant'.
        <Typography variant="h6" sx={{ mt: 2.5, mb: 0.5 }}>
          {name}
        </Typography>

        // @ts-expect-error TS(2304): Cannot find name 'variant'.
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          // @ts-expect-error TS(18004): No value exists in scope for the shorthand propert... Remove this comment to see the full error message
          {role}
        </Typography>
      </Stack>
    </Stack>
  );
}

TestimonialItem.propTypes = {
  testimonial: PropTypes.object,
};
