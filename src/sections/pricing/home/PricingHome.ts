import PropTypes from 'prop-types';
import { m } from 'framer-motion';
// @mui
import { Box, Container, Typography } from '@mui/material';
// components
// @ts-expect-error TS(2307): Cannot find module 'src/components/animate' or its... Remove this comment to see the full error message
import { MotionViewport, varFade } from 'src/components/animate';
//
import PlanCard from './PlanCard';

// ----------------------------------------------------------------------

export default function PricingHome({
  plans
}: any) {
  return (
    // @ts-expect-error TS(2749): 'Container' refers to a value, but is being used a... Remove this comment to see the full error message
    <Container
      // @ts-expect-error TS(2304): Cannot find name 'component'.
      component={MotionViewport}
      // @ts-expect-error TS(2304): Cannot find name 'sx'.
      sx={{
        // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
        pt: { xs: 10, md: 15 },
        // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
        pb: { xs: 5, md: 10 },
      }}
    >
      // @ts-expect-error TS(2749): 'Box' refers to a value, but is being used as a ty... Remove this comment to see the full error message
      <Box
        // @ts-expect-error TS(2304): Cannot find name 'sx'.
        sx={{
          // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
          mb: { xs: 8, md: 10 },
          // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
          textAlign: 'center',
        }}
      >
        // @ts-expect-error TS(2503): Cannot find namespace 'm'.
        <m.div variants={varFade().inDown}>
          // @ts-expect-error TS(2749): 'Typography' refers to a value, but is being used ... Remove this comment to see the full error message
          <Typography variant="overline" sx={{ color: 'text.disabled' }}>
            // @ts-expect-error TS(2304): Cannot find name 'pricing'.
            pricing plans
          </Typography>
        </m.div>

        // @ts-expect-error TS(2304): Cannot find name 'variants'.
        <m.div variants={varFade().inDown}>
          // @ts-expect-error TS(2749): 'Typography' refers to a value, but is being used ... Remove this comment to see the full error message
          <Typography variant="h2" sx={{ my: 3 }}>
            // @ts-expect-error TS(2304): Cannot find name 'The'.
            The Right Plan <br />
            // @ts-expect-error TS(2304): Cannot find name 'For'.
            For Your Business
          </Typography>
        </m.div>

        // @ts-expect-error TS(2304): Cannot find name 'variants'.
        <m.div variants={varFade().inDown}>
          // @ts-expect-error TS(2749): 'Typography' refers to a value, but is being used ... Remove this comment to see the full error message
          <Typography sx={{ color: 'text.secondary' }}>
            // @ts-expect-error TS(2304): Cannot find name 'Choose'.
            Choose the perfect plan for your needs. Always flexible to grow
          </Typography>
        </m.div>
      </Box>

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
      >
        // @ts-expect-error TS(18004): No value exists in scope for the shorthand propert... Remove this comment to see the full error message
        {plans.map((plan: any) => <m.div key={plan.license} variants={varFade().inUp}>
          // @ts-expect-error TS(2709): Cannot use namespace 'PlanCard' as a type.
          <PlanCard plan={plan} />
        </m.div>)}
      </Box>
    </Container>
  );
}

PricingHome.propTypes = {
  plans: PropTypes.array,
};
