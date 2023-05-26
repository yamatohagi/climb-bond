import PropTypes from 'prop-types';
// @mui
import { Card, Link, Stack, Button, Divider, Typography } from '@mui/material';
// types
// @ts-expect-error TS(2307): Cannot find module 'src/routes/paths' or its corre... Remove this comment to see the full error message
import { paths } from 'src/routes/paths';
// components
// @ts-expect-error TS(2307): Cannot find module 'src/components/iconify' or its... Remove this comment to see the full error message
import Iconify from 'src/components/iconify';
// @ts-expect-error TS(2307): Cannot find module 'src/components/image' or its c... Remove this comment to see the full error message
import Image from 'src/components/image';
// @ts-expect-error TS(2307): Cannot find module 'src/components/label' or its c... Remove this comment to see the full error message
import Label from 'src/components/label';

// ----------------------------------------------------------------------

export default function PlanCard({
  plan
}: any) {
  const { license, commons, options, icons, price } = plan;

  const standardLicense = license === 'Standard';

  const plusLicense = license === 'Plus';

  const extendedLicense = license === 'Extended';

  return (
    // @ts-expect-error TS(2749): 'Card' refers to a value, but is being used as a t... Remove this comment to see the full error message
    <Card
      // @ts-expect-error TS(2304): Cannot find name 'sx'.
      sx={{
        // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
        p: 5,
        // @ts-expect-error TS(2304): Cannot find name 'boxShadow'.
        boxShadow: (theme: any) => theme.customShadows.z8,
        // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
        ...(plusLicense && {
          py: 10,
          boxShadow: (theme: any) => theme.customShadows.z24,
        }),
      }}
    >
      // @ts-expect-error TS(18004): No value exists in scope for the shorthand propert... Remove this comment to see the full error message
      {plusLicense && (
        // @ts-expect-error TS(2304): Cannot find name 'color'.
        <Label color="info" sx={{ position: 'absolute', top: 40, left: 40 }}>
          // @ts-expect-error TS(2304): Cannot find name 'POPULAR'.
          POPULAR
        </Label>
      )}

      // @ts-expect-error TS(2749): 'Stack' refers to a value, but is being used as a ... Remove this comment to see the full error message
      <Stack spacing={5}>
        // @ts-expect-error TS(2749): 'Stack' refers to a value, but is being used as a ... Remove this comment to see the full error message
        <Stack direction="row" justifyContent="space-between">
          // @ts-expect-error TS(2749): 'Typography' refers to a value, but is being used ... Remove this comment to see the full error message
          <Typography variant="h5" component="div" sx={{ textTransform: 'uppercase' }}>
            // @ts-expect-error TS(18004): No value exists in scope for the shorthand propert... Remove this comment to see the full error message
            {license}
          </Typography>

          // @ts-expect-error TS(2304): Cannot find name 'direction'.
          <Stack direction="row" spacing={0.5}>
            // @ts-expect-error TS(2749): 'Typography' refers to a value, but is being used ... Remove this comment to see the full error message
            <Typography variant="h4" component="span">
              // @ts-expect-error TS(2581): Cannot find name '$'. Do you need to install type ... Remove this comment to see the full error message
              $
            </Typography>
            // @ts-expect-error TS(2304): Cannot find name 'variant'.
            <Typography variant="h3" component="span">
              // @ts-expect-error TS(18004): No value exists in scope for the shorthand propert... Remove this comment to see the full error message
              {price}
            </Typography>
          </Stack>
        </Stack>

        // @ts-expect-error TS(2304): Cannot find name 'license'.
        {license === 'Standard' ? (
          // @ts-expect-error TS(2304): Cannot find name 'alt'.
          <Image alt="standard" src={icons[0]} sx={{ width: 24, height: 24 }} />
        ) : (
          // @ts-expect-error TS(2749): 'Stack' refers to a value, but is being used as a ... Remove this comment to see the full error message
          <Stack direction="row" spacing={1.5}>
            // @ts-expect-error TS(2362): The left-hand side of an arithmetic operation must... Remove this comment to see the full error message
            {icons.map((icon: any) => <Image key={icon} alt={icon} src={icon} sx={{ width: 24, height: 24 }} />)}
          </Stack>
        )}

        // @ts-expect-error TS(2749): 'Stack' refers to a value, but is being used as a ... Remove this comment to see the full error message
        <Stack spacing={2.5}>
          // @ts-expect-error TS(2362): The left-hand side of an arithmetic operation must... Remove this comment to see the full error message
          {commons.map((option: any) => <Stack key={option} spacing={1.5} direction="row" alignItems="center">
            <Iconify
              // @ts-expect-error TS(2304): Cannot find name 'icon'.
              icon="carbon:checkmark-outline"
              // @ts-expect-error TS(2304): Cannot find name 'sx'.
              sx={{ color: 'primary.main', width: 20, height: 20 }}
            />
            // @ts-expect-error TS(2749): 'Typography' refers to a value, but is being used ... Remove this comment to see the full error message
            <Typography variant="body2">{option}</Typography>
          </Stack>)}

          // @ts-expect-error TS(2304): Cannot find name 'sx'.
          <Divider sx={{ borderStyle: 'dashed' }} />

          // @ts-expect-error TS(2304): Cannot find name 'options'.
          {options.map((option: any) => <Stack
            // @ts-expect-error TS(2304): Cannot find name 'key'.
            key={option.title}
            // @ts-expect-error TS(2304): Cannot find name 'direction'.
            direction="row"
            // @ts-expect-error TS(2304): Cannot find name 'alignItems'.
            alignItems="center"
            // @ts-expect-error TS(2304): Cannot find name 'sx'.
            sx={{
              typography: 'body2',
              // @ts-expect-error TS(2304): Cannot find name 'option'.
              ...(option.disabled && { color: 'text.disabled' }),
            }}
          >
            <Iconify
              // @ts-expect-error TS(2304): Cannot find name 'icon'.
              icon={option.disabled ? 'carbon:close-outline' : 'carbon:checkmark-outline'}
              // @ts-expect-error TS(2304): Cannot find name 'sx'.
              sx={{
                // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
                mr: 2,
                // @ts-expect-error TS(2304): Cannot find name 'color'.
                color: 'primary.main',
                // @ts-expect-error TS(2304): Cannot find name 'option'.
                ...(option.disabled && { color: 'currentColor' }),
              }}
            />
            // @ts-expect-error TS(2304): Cannot find name 'option'.
            {option.title}
          // @ts-expect-error TS(2365): Operator '<' cannot be applied to types 'boolean' ... Remove this comment to see the full error message
          </Stack>)}
        </Stack>

        // @ts-expect-error TS(2304): Cannot find name 'alignItems'.
        <Stack alignItems="flex-end" spacing={3}>
          // @ts-expect-error TS(2749): 'Button' refers to a value, but is being used as a... Remove this comment to see the full error message
          <Button
            // @ts-expect-error TS(2304): Cannot find name 'size'.
            size="large"
            // @ts-expect-error TS(2304): Cannot find name 'fullWidth'.
            fullWidth
            // @ts-expect-error TS(2304): Cannot find name 'variant'.
            variant={standardLicense ? 'outlined' : 'contained'}
            // @ts-expect-error TS(2304): Cannot find name 'color'.
            color={extendedLicense ? 'primary' : 'inherit'}
            // @ts-expect-error TS(2304): Cannot find name 'target'.
            target="_blank"
            // @ts-expect-error TS(2304): Cannot find name 'rel'.
            rel="noopener"
            // @ts-expect-error TS(2304): Cannot find name 'href'.
            href={paths.zoneStore}
          >
            // @ts-expect-error TS(2304): Cannot find name 'Choose'.
            Choose Package
          </Button>

          <Link
            // @ts-expect-error TS(2304): Cannot find name 'color'.
            color="text.secondary"
            // @ts-expect-error TS(2304): Cannot find name 'target'.
            target="_blank"
            // @ts-expect-error TS(2304): Cannot find name 'rel'.
            rel="noopener"
            // @ts-expect-error TS(2304): Cannot find name 'variant'.
            variant="body2"
            // @ts-expect-error TS(2304): Cannot find name 'href'.
            href={paths.license}
            // @ts-expect-error TS(2304): Cannot find name 'sx'.
            sx={{ display: 'flex', alignItems: 'center' }}
          >
            // @ts-expect-error TS(2304): Cannot find name 'Read'.
            Read license
            // @ts-expect-error TS(2304): Cannot find name 'icon'.
            <Iconify icon="carbon:chevron-right" width={16} sx={{ ml: 1 }} />
          </Link>
        </Stack>
      </Stack>
    </Card>
  );
}

PlanCard.propTypes = {
  plan: PropTypes.shape({
    commons: PropTypes.array,
    icons: PropTypes.array,
    license: PropTypes.string,
    options: PropTypes.array,
    price: PropTypes.string,
  }),
};
