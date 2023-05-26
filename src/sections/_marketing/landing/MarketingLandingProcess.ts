import PropTypes from 'prop-types';
// @mui
import { alpha } from '@mui/material/styles';
import { Stack, Container, Typography, Card, Box } from '@mui/material';
// components
// @ts-expect-error TS(2307): Cannot find module 'src/components/svg-color' or i... Remove this comment to see the full error message
import SvgColor from 'src/components/svg-color';

// ----------------------------------------------------------------------

const COLORS = ['primary', 'secondary', 'warning', 'success'];

const SERVICES = [
  {
    name: 'Planning',
    icon: '/assets/icons/ic_sketch_design.svg',
  },
  {
    name: 'Research',
    icon: '/assets/icons/ic_search.svg',
  },
  {
    name: 'Optimizing',
    icon: '/assets/icons/ic_optimization.svg',
  },
  {
    name: 'Results',
    icon: '/assets/icons/ic_analysis.svg',
  },
];

// ----------------------------------------------------------------------

export default function MarketingLandingProcess() {
  return (
    // @ts-expect-error TS(2749): 'Container' refers to a value, but is being used a... Remove this comment to see the full error message
    <Container
      // @ts-expect-error TS(2304): Cannot find name 'sx'.
      sx={{
        // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
        py: { xs: 5, md: 10 },
      }}
    >
      // @ts-expect-error TS(2749): 'Stack' refers to a value, but is being used as a ... Remove this comment to see the full error message
      <Stack
        // @ts-expect-error TS(2304): Cannot find name 'spacing'.
        spacing={3}
        // @ts-expect-error TS(2304): Cannot find name 'sx'.
        sx={{
          // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
          maxWidth: 480,
          // @ts-expect-error TS(2304): Cannot find name 'mb'.
          mb: { xs: 8, md: 5 },
          // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
          mx: { xs: 'auto', md: 'unset' },
          // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
          textAlign: { xs: 'center', md: 'unset' },
        }}
      >
        // @ts-expect-error TS(2749): 'Typography' refers to a value, but is being used ... Remove this comment to see the full error message
        <Typography variant="overline" sx={{ color: 'text.disabled' }}>
          // @ts-expect-error TS(2304): Cannot find name 'Work'.
          Work Flow
        </Typography>

        // @ts-expect-error TS(2304): Cannot find name 'variant'.
        <Typography variant="h2">Working Process</Typography>

        // @ts-expect-error TS(2304): Cannot find name 'sx'.
        <Typography sx={{ color: 'text.secondary' }}>
          // @ts-expect-error TS(2304): Cannot find name 'Nunc'.
          Nunc nonummy metus. Donec elit libero, sodales nec, volutpat a, suscipit non, turpis.
        </Typography>
      </Stack>

      <Box
        // @ts-expect-error TS(2304): Cannot find name 'sx'.
        sx={{
          // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
          gap: 4,
          // @ts-expect-error TS(2304): Cannot find name 'display'.
          display: 'grid',
          // @ts-expect-error TS(2304): Cannot find name 'alignItems'.
          alignItems: 'flex-end',
          // @ts-expect-error TS(2304): Cannot find name 'gridTemplateColumns'.
          gridTemplateColumns: {
            // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
            xs: 'repeat(1, 1fr)',
            // @ts-expect-error TS(2304): Cannot find name 'sm'.
            sm: 'repeat(2, 1fr)',
            // @ts-expect-error TS(2304): Cannot find name 'md'.
            md: 'repeat(4, 1fr)',
          },
        }}
      // @ts-expect-error TS(2365): Operator '<' cannot be applied to types 'boolean' ... Remove this comment to see the full error message
      >
        {SERVICES.map((service: any, index: any) => (
          // @ts-expect-error TS(2709): Cannot use namespace 'ServiceItem' as a type.
          <ServiceItem key={service.name} service={service} index={index} />
        ))}
      </Box>
    </Container>
  );
}

// ----------------------------------------------------------------------

function ServiceItem({
  service,
  index
}: any) {
  const { name, icon } = service;

  return (
    // @ts-expect-error TS(2749): 'Card' refers to a value, but is being used as a t... Remove this comment to see the full error message
    <Card
      // @ts-expect-error TS(2304): Cannot find name 'sx'.
      sx={{
        // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
        p: 2,
        // @ts-expect-error TS(2304): Cannot find name 'color'.
        color: (theme: any) => theme.palette[COLORS[index]].darker,
        // @ts-expect-error TS(2304): Cannot find name 'bgcolor'.
        bgcolor: (theme: any) => theme.palette[COLORS[index]].light,
        // @ts-expect-error TS(2304): Cannot find name 'boxShadow'.
        boxShadow: (theme: any) => `-8px 12px 32px 0px ${alpha(theme.palette[COLORS[index]].main, 0.2)}`,
        // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
        ...(index === 1 && {
          mb: { md: 2.5 },
        }),
        // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
        ...(index === 2 && {
          mb: { md: 5 },
        }),
        // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
        ...(index === 3 && {
          mb: { md: 7.5 },
        }),
      }}
    >
      // @ts-expect-error TS(2304): Cannot find name 'src'.
      <SvgColor src={icon} sx={{ width: 64, height: 64, opacity: 0.48 }} />

      // @ts-expect-error TS(2304): Cannot find name 'variant'.
      <Typography variant="h5" sx={{ mt: 3, textAlign: 'right' }}>
        {name}
      </Typography>
    </Card>
  );
}

ServiceItem.propTypes = {
  index: PropTypes.number,
  service: PropTypes.shape({
    icon: PropTypes.node,
    name: PropTypes.string,
  }),
};
