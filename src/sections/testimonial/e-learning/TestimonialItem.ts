import PropTypes from 'prop-types';
// @mui
import { Typography, Stack, Avatar } from '@mui/material';
// components
// @ts-expect-error TS(2307): Cannot find module 'src/components/iconify' or its... Remove this comment to see the full error message
import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

TestimonialItemContent.propTypes = {
  testimonial: PropTypes.object,
};

export function TestimonialItemContent({
  testimonial
}: any) {
  const { review } = testimonial;

  return (
    // @ts-expect-error TS(2749): 'Stack' refers to a value, but is being used as a ... Remove this comment to see the full error message
    <Stack alignItems="center">
      <Iconify
        // @ts-expect-error TS(2304): Cannot find name 'icon'.
        icon="carbon:quotes"
        // @ts-expect-error TS(2304): Cannot find name 'sx'.
        sx={{ width: 48, height: 48, opacity: 0.48, color: 'primary.main' }}
      // @ts-expect-error TS(2365): Operator '<' cannot be applied to types 'RegExp' a... Remove this comment to see the full error message
      />

      <Typography
        // @ts-expect-error TS(2304): Cannot find name 'sx'.
        sx={{
          // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
          mt: 2,
          // @ts-expect-error TS(2304): Cannot find name 'mb'.
          mb: 5,
          // @ts-expect-error TS(2552): Cannot find name 'lineHeight'. Did you mean 'inner... Remove this comment to see the full error message
          lineHeight: 1.75,
          // @ts-expect-error TS(2304): Cannot find name 'fontSize'.
          fontSize: { xs: 20, md: 24 },
          // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
          fontFamily: (theme: any) => theme.typography.h1.fontFamily,
        }}
      // @ts-expect-error TS(2365): Operator '<' cannot be applied to types 'boolean' ... Remove this comment to see the full error message
      >
        // @ts-expect-error TS(18004): No value exists in scope for the shorthand propert... Remove this comment to see the full error message
        {review}
      </Typography>
    </Stack>
  );
}

// ----------------------------------------------------------------------

TestimonialItemThumbnail.propTypes = {
  isSelected: PropTypes.bool,
  testimonial: PropTypes.object,
};

export function TestimonialItemThumbnail({
  testimonial,
  isSelected
}: any) {
  const { avatar } = testimonial;

  return (
    // @ts-expect-error TS(2749): 'Stack' refers to a value, but is being used as a ... Remove this comment to see the full error message
    <Stack
      // @ts-expect-error TS(2304): Cannot find name 'sx'.
      sx={{
        // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
        width: 96,
        // @ts-expect-error TS(2304): Cannot find name 'height'.
        height: 96,
        // @ts-expect-error TS(2304): Cannot find name 'alignItems'.
        alignItems: 'center',
        // @ts-expect-error TS(2304): Cannot find name 'justifyContent'.
        justifyContent: 'center',
      }}
    >
      // @ts-expect-error TS(2749): 'Avatar' refers to a value, but is being used as a... Remove this comment to see the full error message
      <Avatar
        // @ts-expect-error TS(2304): Cannot find name 'src'.
        src={avatar}
        // @ts-expect-error TS(2304): Cannot find name 'sx'.
        sx={{
          // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
          width: 48,
          // @ts-expect-error TS(2304): Cannot find name 'height'.
          height: 48,
          // @ts-expect-error TS(2304): Cannot find name 'opacity'.
          opacity: 0.48,
          // @ts-expect-error TS(2304): Cannot find name 'cursor'.
          cursor: 'pointer',
          // @ts-expect-error TS(2304): Cannot find name 'transition'.
          transition: (theme: any) => theme.transitions.create('all'),
          // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
          ...(isSelected && {
            opacity: 1,
            transform: 'scale(2)',
          }),
        }}
      />
    </Stack>
  );
}
