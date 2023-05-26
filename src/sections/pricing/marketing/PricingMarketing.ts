// @mui
import PropTypes from 'prop-types';
import { Box, Stack, Switch, Container, Typography } from '@mui/material';
// components
import PlanCard from './PlanCard';

// ----------------------------------------------------------------------

export default function PricingMarketing({
  plans
}: any) {
  return (
    // @ts-expect-error TS(2749): 'Container' refers to a value, but is being used a... Remove this comment to see the full error message
    <Container
      // @ts-expect-error TS(2304): Cannot find name 'sx'.
      sx={{
        // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
        pt: 10,
        // @ts-expect-error TS(2304): Cannot find name 'pb'.
        pb: { xs: 5, md: 10 },
      }}
    >
      // @ts-expect-error TS(2749): 'Stack' refers to a value, but is being used as a ... Remove this comment to see the full error message
      <Stack
        // @ts-expect-error TS(2304): Cannot find name 'spacing'.
        spacing={5}
        // @ts-expect-error TS(2304): Cannot find name 'alignItems'.
        alignItems={{ xs: 'center', md: 'flex-end' }}
        // @ts-expect-error TS(2304): Cannot find name 'direction'.
        direction={{ xs: 'column', md: 'row' }}
        // @ts-expect-error TS(2304): Cannot find name 'justifyContent'.
        justifyContent={{ md: 'space-between' }}
        // @ts-expect-error TS(2304): Cannot find name 'sx'.
        sx={{ mb: { xs: 5, md: 10 } }}
      >
        // @ts-expect-error TS(2749): 'Stack' refers to a value, but is being used as a ... Remove this comment to see the full error message
        <Stack
          // @ts-expect-error TS(2304): Cannot find name 'spacing'.
          spacing={3}
          // @ts-expect-error TS(2304): Cannot find name 'sx'.
          sx={{
            // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
            maxWidth: 480,
            // @ts-expect-error TS(2304): Cannot find name 'mx'.
            mx: { xs: 'auto', md: 'unset' },
            // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
            textAlign: { xs: 'center', md: 'unset' },
          }}
        >
          // @ts-expect-error TS(2749): 'Typography' refers to a value, but is being used ... Remove this comment to see the full error message
          <Typography variant="overline" sx={{ color: 'text.disabled' }}>
            // @ts-expect-error TS(2304): Cannot find name 'Pricing'.
            Pricing
          </Typography>

          // @ts-expect-error TS(2304): Cannot find name 'variant'.
          <Typography variant="h2">Check Our Pricing</Typography>

          // @ts-expect-error TS(2304): Cannot find name 'sx'.
          <Typography sx={{ color: 'text.secondary' }}>
            // @ts-expect-error TS(2304): Cannot find name 'Choose'.
            Choose the perfect plan for your needs.
            // @ts-expect-error TS(2304): Cannot find name 'br'.
            <br /> Always flexible to grow
          </Typography>
        </Stack>

        // @ts-expect-error TS(2304): Cannot find name 'direction'.
        <Stack direction="row" alignItems="center">
          // @ts-expect-error TS(2749): 'Typography' refers to a value, but is being used ... Remove this comment to see the full error message
          <Typography variant="overline">MONTHLY</Typography>

          // @ts-expect-error TS(2304): Cannot find name 'defaultChecked'.
          <Switch defaultChecked />

          // @ts-expect-error TS(2749): 'Typography' refers to a value, but is being used ... Remove this comment to see the full error message
          <Typography variant="overline">YEARLY (save 10%)</Typography>
        </Stack>
      </Stack>

      <Box
        // @ts-expect-error TS(2304): Cannot find name 'sx'.
        sx={{
          // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
          gap: 4,
          // @ts-expect-error TS(2304): Cannot find name 'display'.
          display: 'grid',
          // @ts-expect-error TS(2304): Cannot find name 'alignItems'.
          alignItems: 'center',
          // @ts-expect-error TS(2304): Cannot find name 'gridTemplateColumns'.
          gridTemplateColumns: {
            // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
            xs: 'repeat(1, 1fr)',
            // @ts-expect-error TS(2304): Cannot find name 'md'.
            md: 'repeat(3, 1fr)',
          },
        }}
      // @ts-expect-error TS(2365): Operator '<' cannot be applied to types 'boolean' ... Remove this comment to see the full error message
      >
        // @ts-expect-error TS(18004): No value exists in scope for the shorthand propert... Remove this comment to see the full error message
        {plans.map((plan: any) => <PlanCard key={plan.license} plan={plan} />)}
      </Box>
    </Container>
  );
}

PricingMarketing.propTypes = {
  plans: PropTypes.array,
};
