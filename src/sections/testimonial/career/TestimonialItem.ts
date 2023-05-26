import PropTypes from 'prop-types';
// @mui
import { Typography, Stack, Rating } from '@mui/material';

// ----------------------------------------------------------------------

export default function TestimonialItem({
  testimonial,
  sx,
  ...other
}: any) {
  const { name, review, role, rating } = testimonial;

  return (
    // @ts-expect-error TS(2749): 'Stack' refers to a value, but is being used as a ... Remove this comment to see the full error message
    <Stack
      // @ts-expect-error TS(2304): Cannot find name 'alignItems'.
      alignItems="center"
      sx={{
        // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
        textAlign: 'center',
        // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
        ...sx,
      }}
      // @ts-expect-error TS(2304): Cannot find name 'other'.
      {...other}
    >
      // @ts-expect-error TS(2749): 'Rating' refers to a value, but is being used as a... Remove this comment to see the full error message
      <Rating value={rating} readOnly />

      // @ts-expect-error TS(2749): 'Typography' refers to a value, but is being used ... Remove this comment to see the full error message
      <Typography
        // @ts-expect-error TS(2304): Cannot find name 'sx'.
        sx={{
          // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
          my: 3,
          // @ts-expect-error TS(2552): Cannot find name 'lineHeight'. Did you mean 'inner... Remove this comment to see the full error message
          lineHeight: 1.75,
          // @ts-expect-error TS(2304): Cannot find name 'fontSize'.
          fontSize: { md: 20 },
        }}
      // @ts-expect-error TS(2365): Operator '<' cannot be applied to types 'boolean' ... Remove this comment to see the full error message
      >
        // @ts-expect-error TS(18004): No value exists in scope for the shorthand propert... Remove this comment to see the full error message
        {review}
      </Typography>

      // @ts-expect-error TS(2304): Cannot find name 'variant'.
      <Typography variant="h6">{name}</Typography>

      // @ts-expect-error TS(2304): Cannot find name 'variant'.
      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
        // @ts-expect-error TS(18004): No value exists in scope for the shorthand propert... Remove this comment to see the full error message
        {role}
      </Typography>
    </Stack>
  );
}

TestimonialItem.propTypes = {
  sx: PropTypes.object,
  testimonial: PropTypes.object,
};
