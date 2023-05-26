import PropTypes from 'prop-types';
// @mui
import { Card, Stack, Button, Typography } from '@mui/material';
// components
// @ts-expect-error TS(2307): Cannot find module 'src/components/label' or its c... Remove this comment to see the full error message
import Label from 'src/components/label';
// @ts-expect-error TS(2307): Cannot find module 'src/components/image' or its c... Remove this comment to see the full error message
import Image from 'src/components/image';

// ----------------------------------------------------------------------

export default function PlanCard({
  plan
}: any) {
  const { license, icon, options, price } = plan;

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
        // @ts-expect-error TS(2304): Cannot find name 'textAlign'.
        textAlign: 'center',
        // @ts-expect-error TS(2304): Cannot find name 'boxShadow'.
        boxShadow: (theme: any) => theme.customShadows.z8,
        // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
        ...(starterLicense && {
          py: 8,
          boxShadow: (theme: any) => theme.customShadows.z24,
        }),
      }}
    >
      // @ts-expect-error TS(18004): No value exists in scope for the shorthand propert... Remove this comment to see the full error message
      {starterLicense && (
        // @ts-expect-error TS(2304): Cannot find name 'color'.
        <Label color="info" sx={{ position: 'absolute', top: 16, right: 16 }}>
          // @ts-expect-error TS(2304): Cannot find name 'POPULAR'.
          POPULAR
        </Label>
      )}

      // @ts-expect-error TS(2749): 'Stack' refers to a value, but is being used as a ... Remove this comment to see the full error message
      <Stack spacing={5} alignItems="center">
        // @ts-expect-error TS(2749): 'Typography' refers to a value, but is being used ... Remove this comment to see the full error message
        <Typography variant="overline" component="div" sx={{ color: 'text.secondary' }}>
          // @ts-expect-error TS(18004): No value exists in scope for the shorthand propert... Remove this comment to see the full error message
          {license}
        </Typography>

        // @ts-expect-error TS(2304): Cannot find name 'alt'.
        <Image alt={icon} src={icon} sx={{ width: 80, height: 80 }} />

        // @ts-expect-error TS(2304): Cannot find name 'direction'.
        <Stack direction="row" alignItems="center" justifyContent="center" spacing={0.5}>
          // @ts-expect-error TS(2304): Cannot find name 'basicLicense'.
          {!basicLicense && (
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

          // @ts-expect-error TS(2304): Cannot find name 'basicLicense'.
          {!basicLicense && (
            // @ts-expect-error TS(2749): 'Typography' refers to a value, but is being used ... Remove this comment to see the full error message
            <Typography variant="subtitle2" component="span">
              /mo
            </Typography>
          )}
        </Stack>

        // @ts-expect-error TS(2304): Cannot find name 'spacing'.
        <Stack spacing={1} sx={{ textAlign: 'center' }}>
          // @ts-expect-error TS(18004): No value exists in scope for the shorthand propert... Remove this comment to see the full error message
          {options.map((option: any) => <Typography
            // @ts-expect-error TS(2304): Cannot find name 'key'.
            key={option.title}
            // @ts-expect-error TS(2304): Cannot find name 'variant'.
            variant={option.disabled ? 'body2' : 'subtitle2'}
            // @ts-expect-error TS(2304): Cannot find name 'sx'.
            sx={{
              // @ts-expect-error TS(2304): Cannot find name 'option'.
              ...(option.disabled && {
                color: 'text.disabled',
                textDecoration: 'line-through',
              }),
            }}
          >
            // @ts-expect-error TS(18004): No value exists in scope for the shorthand propert... Remove this comment to see the full error message
            {option.title}
          </Typography>)}
        </Stack>

        <Button
          // @ts-expect-error TS(2304): Cannot find name 'fullWidth'.
          fullWidth
          // @ts-expect-error TS(2304): Cannot find name 'disabled'.
          disabled={basicLicense}
          // @ts-expect-error TS(2304): Cannot find name 'size'.
          size="large"
          // @ts-expect-error TS(2304): Cannot find name 'variant'.
          variant={basicLicense ? 'outlined' : 'contained'}
          // @ts-expect-error TS(2304): Cannot find name 'color'.
          color={premiumLicense ? 'primary' : 'inherit'}
        >
          // @ts-expect-error TS(18004): No value exists in scope for the shorthand propert... Remove this comment to see the full error message
          {basicLicense && 'Current Plan'}
          // @ts-expect-error TS(2304): Cannot find name 'starterLicense'.
          {starterLicense && 'Choose Starter'}
          // @ts-expect-error TS(2304): Cannot find name 'premiumLicense'.
          {premiumLicense && 'Choose Premium'}
        // @ts-expect-error TS(2365): Operator '<' cannot be applied to types 'boolean' ... Remove this comment to see the full error message
        </Button>
      </Stack>
    </Card>
  );
}

PlanCard.propTypes = {
  plan: PropTypes.shape({
    icon: PropTypes.node,
    license: PropTypes.string,
    options: PropTypes.array,
    price: PropTypes.string,
  }),
};
