import PropTypes from 'prop-types';
// @mui
import { Stack, Typography } from '@mui/material';
// components
// @ts-expect-error TS(2307): Cannot find module 'src/components/label' or its c... Remove this comment to see the full error message
import Label from 'src/components/label';
// @ts-expect-error TS(2307): Cannot find module 'src/components/image' or its c... Remove this comment to see the full error message
import Image from 'src/components/image';

// ----------------------------------------------------------------------

export default function PlanHeader({
  plan
}: any) {
  const { license, caption, price, icon } = plan;

  const startLicense = plan.license === 'Start';

  const proLicense = plan.license === 'Pro';

  return (
    // @ts-expect-error TS(2749): 'Stack' refers to a value, but is being used as a ... Remove this comment to see the full error message
    <Stack
      // @ts-expect-error TS(2304): Cannot find name 'spacing'.
      spacing={2}
      // @ts-expect-error TS(2304): Cannot find name 'alignItems'.
      alignItems={{ xs: 'flex-start', md: 'center' }}
      // @ts-expect-error TS(2304): Cannot find name 'sx'.
      sx={{
        // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
        px: 3,
        // @ts-expect-error TS(2304): Cannot find name 'py'.
        py: 5,
        // @ts-expect-error TS(2304): Cannot find name 'position'.
        position: 'relative',
        // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
        ...(proLicense && {
          bgcolor: { md: 'background.neutral' },
          borderRadius: '16px 16px 0 0',
        }),
      }}
    >
      // @ts-expect-error TS(18004): No value exists in scope for the shorthand propert... Remove this comment to see the full error message
      {proLicense && (
        // @ts-expect-error TS(2304): Cannot find name 'color'.
        <Label color="info" sx={{ position: 'absolute', top: 16, right: 16 }}>
          // @ts-expect-error TS(2304): Cannot find name 'POPULAR'.
          POPULAR
        </Label>
      )}

      // @ts-expect-error TS(2749): 'Typography' refers to a value, but is being used ... Remove this comment to see the full error message
      <Typography variant="overline" sx={{ color: 'text.secondary' }}>
        // @ts-expect-error TS(18004): No value exists in scope for the shorthand propert... Remove this comment to see the full error message
        {license}
      </Typography>

      <Stack
        // @ts-expect-error TS(2304): Cannot find name 'direction'.
        direction="row"
        // @ts-expect-error TS(2304): Cannot find name 'alignItems'.
        alignItems="center"
        // @ts-expect-error TS(2304): Cannot find name 'justifyContent'.
        justifyContent="center"
        // @ts-expect-error TS(2304): Cannot find name 'spacing'.
        spacing={0.5}
        // @ts-expect-error TS(2304): Cannot find name 'sx'.
        sx={{
          // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
          ...(proLicense && {
            color: { md: 'primary.main' },
          }),
        }}
      >
        // @ts-expect-error TS(2304): Cannot find name 'startLicense'.
        {!startLicense && (
          // @ts-expect-error TS(2749): 'Typography' refers to a value, but is being used ... Remove this comment to see the full error message
          <Typography variant="h4" component="span">
            // @ts-expect-error TS(2581): Cannot find name '$'. Do you need to install type ... Remove this comment to see the full error message
            $
          </Typography>
        )}

        // @ts-expect-error TS(2749): 'Typography' refers to a value, but is being used ... Remove this comment to see the full error message
        <Typography variant="h3" component="span">
          // @ts-expect-error TS(18004): No value exists in scope for the shorthand propert... Remove this comment to see the full error message
          {price}
        </Typography>

        // @ts-expect-error TS(2304): Cannot find name 'startLicense'.
        {!startLicense && (
          // @ts-expect-error TS(2749): 'Typography' refers to a value, but is being used ... Remove this comment to see the full error message
          <Typography variant="subtitle2" component="span">
            /mo
          </Typography>
        )}
      </Stack>

      // @ts-expect-error TS(2304): Cannot find name 'alt'.
      <Image alt={icon} src={icon} sx={{ width: 80, height: 80 }} />

      // @ts-expect-error TS(2304): Cannot find name 'variant'.
      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
        // @ts-expect-error TS(18004): No value exists in scope for the shorthand propert... Remove this comment to see the full error message
        {caption}
      </Typography>
    </Stack>
  );
}

PlanHeader.propTypes = {
  plan: PropTypes.shape({
    caption: PropTypes.string,
    icon: PropTypes.node,
    license: PropTypes.string,
    price: PropTypes.string,
  }),
};
