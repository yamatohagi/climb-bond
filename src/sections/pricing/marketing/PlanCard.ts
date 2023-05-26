import PropTypes from 'prop-types';
// @mui
import { Card, Stack, Button, Typography } from '@mui/material';
//
// @ts-expect-error TS(2307): Cannot find module 'src/components/image' or its c... Remove this comment to see the full error message
import Image from 'src/components/image';
// @ts-expect-error TS(2307): Cannot find module 'src/components/label' or its c... Remove this comment to see the full error message
import Label from 'src/components/label';
// @ts-expect-error TS(2307): Cannot find module 'src/components/iconify' or its... Remove this comment to see the full error message
import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

export default function PlanCard({
  plan
}: any) {
  const { license, icon, options, price, caption } = plan;

  const basicLicense = license === 'Basic';

  const starterLicense = license === 'Starter';

  const premiumLicense = license === 'Premium';

  return (
    // @ts-expect-error TS(2749): 'Card' refers to a value, but is being used as a t... Remove this comment to see the full error message
    <Card
      // @ts-expect-error TS(2304): Cannot find name 'sx'.
      sx={{
        // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
        p: 5,
        // @ts-expect-error TS(2304): Cannot find name 'pt'.
        pt: 8,
        // @ts-expect-error TS(2304): Cannot find name 'boxShadow'.
        boxShadow: (theme: any) => ({
          md: theme.customShadows.z8
        }),
        // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
        ...(starterLicense && {
          boxShadow: (theme: any) => ({
            md: theme.customShadows.z24
          }),
        }),
      }}
    >
      // @ts-expect-error TS(18004): No value exists in scope for the shorthand propert... Remove this comment to see the full error message
      {starterLicense && (
        // @ts-expect-error TS(2304): Cannot find name 'color'.
        <Label color="info" sx={{ position: 'absolute', top: 24, left: 32 }}>
          // @ts-expect-error TS(2304): Cannot find name 'POPULAR'.
          POPULAR
        </Label>
      )}

      // @ts-expect-error TS(2749): 'Stack' refers to a value, but is being used as a ... Remove this comment to see the full error message
      <Stack direction="row" justifyContent="space-between">
        // @ts-expect-error TS(2304): Cannot find name 'div'.
        <div>
          // @ts-expect-error TS(2749): 'Typography' refers to a value, but is being used ... Remove this comment to see the full error message
          <Typography variant="h4" component="div" sx={{ color: 'primary.main', mb: 2 }}>
            // @ts-expect-error TS(18004): No value exists in scope for the shorthand propert... Remove this comment to see the full error message
            {license}
          </Typography>

          // @ts-expect-error TS(2304): Cannot find name 'direction'.
          <Stack direction="row" alignItems="center" spacing={0.5}>
            // @ts-expect-error TS(2749): 'Typography' refers to a value, but is being used ... Remove this comment to see the full error message
            <Typography variant="h3" component="span">{`$${price}`}</Typography>
            // @ts-expect-error TS(2304): Cannot find name 'variant'.
            <Typography variant="h5" component="span" sx={{ color: 'text.disabled' }}>
              /mo
            </Typography>
          </Stack>
        </div>

        // @ts-expect-error TS(2304): Cannot find name 'alt'.
        <Image alt="icon" src={icon} sx={{ width: 64, height: 64 }} />
      </Stack>

      // @ts-expect-error TS(2304): Cannot find name 'variant'.
      <Typography variant="body2" sx={{ color: 'text.secondary', mt: 3 }}>
        // @ts-expect-error TS(18004): No value exists in scope for the shorthand propert... Remove this comment to see the full error message
        {caption}
      </Typography>

      // @ts-expect-error TS(2304): Cannot find name 'spacing'.
      <Stack spacing={2} sx={{ my: 5 }}>
        // @ts-expect-error TS(18004): No value exists in scope for the shorthand propert... Remove this comment to see the full error message
        {options.map((option: any) => <Stack key={option} direction="row" alignItems="center" sx={{ typography: 'body2' }}>
          // @ts-expect-error TS(2304): Cannot find name 'icon'.
          <Iconify icon="carbon:checkmark" sx={{ mr: 2, color: 'primary.main' }} /> {option}
        </Stack>)}
      </Stack>

      <Button
        // @ts-expect-error TS(2304): Cannot find name 'fullWidth'.
        fullWidth
        // @ts-expect-error TS(2304): Cannot find name 'size'.
        size="large"
        // @ts-expect-error TS(2304): Cannot find name 'color'.
        color={(premiumLicense && 'primary') || 'inherit'}
        // @ts-expect-error TS(2304): Cannot find name 'variant'.
        variant={(basicLicense && 'outlined') || 'contained'}
      >
        // @ts-expect-error TS(2304): Cannot find name 'Choose'.
        Choose Package
      </Button>
    </Card>
  );
}

PlanCard.propTypes = {
  plan: PropTypes.shape({
    caption: PropTypes.string,
    icon: PropTypes.node,
    license: PropTypes.string,
    options: PropTypes.array,
    price: PropTypes.string,
  }),
};
