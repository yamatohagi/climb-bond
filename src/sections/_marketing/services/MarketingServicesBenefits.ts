import PropTypes from 'prop-types';
// @mui
import { Box, Container, Typography, Stack } from '@mui/material';
// hooks
// @ts-expect-error TS(2307): Cannot find module 'src/hooks/useResponsive' or it... Remove this comment to see the full error message
import useResponsive from 'src/hooks/useResponsive';
// components
// @ts-expect-error TS(2307): Cannot find module 'src/components/image' or its c... Remove this comment to see the full error message
import Image from 'src/components/image';

// ----------------------------------------------------------------------

const BENEFITS = [
  {
    title: 'Online Media',
    description: 'Suspendisse enim turpis, dictum sed, iaculis a, condimentum nec, nisi. ',
    iconColor: 'primary',
  },
  {
    title: 'Design',
    description: 'Suspendisse enim turpis, dictum sed, iaculis a, condimentum nec, nisi. ',
    iconColor: 'success',
  },
  {
    title: 'Marketing',
    description: 'Suspendisse enim turpis, dictum sed, iaculis a, condimentum nec, nisi. ',
    iconColor: 'secondary',
  },
  {
    title: 'HR & Recruiting',
    description: 'Suspendisse enim turpis, dictum sed, iaculis a, condimentum nec, nisi. ',
    iconColor: 'secondary',
  },
  {
    title: 'Management',
    description: 'Suspendisse enim turpis, dictum sed, iaculis a, condimentum nec, nisi. ',
    iconColor: 'success',
  },
  {
    title: 'Branding',
    description: 'Suspendisse enim turpis, dictum sed, iaculis a, condimentum nec, nisi. ',
    iconColor: 'primary',
  },
];

// ----------------------------------------------------------------------

export default function MarketingServicesBenefits() {
  const isMdUp = useResponsive('up', 'md');

  return (
    // @ts-expect-error TS(2749): 'Box' refers to a value, but is being used as a ty... Remove this comment to see the full error message
    <Box
      // @ts-expect-error TS(2304): Cannot find name 'sx'.
      sx={{
        // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
        bgcolor: 'background.neutral',
        // @ts-expect-error TS(2304): Cannot find name 'py'.
        py: { xs: 10, md: 15 },
      }}
    >
      // @ts-expect-error TS(2749): 'Container' refers to a value, but is being used a... Remove this comment to see the full error message
      <Container>
        // @ts-expect-error TS(2749): 'Typography' refers to a value, but is being used ... Remove this comment to see the full error message
        <Typography variant="h2" sx={{ textAlign: 'center' }}>
          // @ts-expect-error TS(2552): Cannot find name 'Benefits'. Did you mean 'BENEFIT... Remove this comment to see the full error message
          Benefits Achieved
        </Typography>

        <Typography
          // @ts-expect-error TS(2304): Cannot find name 'sx'.
          sx={{
            // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
            mt: 3,
            // @ts-expect-error TS(2304): Cannot find name 'mx'.
            mx: 'auto',
            // @ts-expect-error TS(2304): Cannot find name 'opacity'.
            opacity: 0.72,
            // @ts-expect-error TS(2304): Cannot find name 'maxWidth'.
            maxWidth: 480,
            // @ts-expect-error TS(2304): Cannot find name 'textAlign'.
            textAlign: 'center',
            // @ts-expect-error TS(2304): Cannot find name 'mb'.
            mb: { xs: 8, md: 10 },
          }}
        >
          // @ts-expect-error TS(2304): Cannot find name 'Nunc'.
          Nunc nonummy metus. Donec elit libero, sodales nec, volutpat a, suscipit non, turpis.
        </Typography>

        <Box
          // @ts-expect-error TS(2304): Cannot find name 'sx'.
          sx={{
            // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
            display: 'grid',
            // @ts-expect-error TS(2304): Cannot find name 'alignItems'.
            alignItems: 'center',
            // @ts-expect-error TS(2304): Cannot find name 'gap'.
            gap: { xs: 4, md: 8 },
            gridTemplateColumns: { md: 'repeat(3, 1fr)' },
          }}
        >
          // @ts-expect-error TS(2749): 'Stack' refers to a value, but is being used as a ... Remove this comment to see the full error message
          <Stack spacing={{ xs: 4, md: 10 }}>
            {BENEFITS.slice(0, 3).map((benefit: any, index: any) => (
              // @ts-expect-error TS(2709): Cannot use namespace 'BenefitItem' as a type.
              <BenefitItem key={benefit.title} benefit={benefit} index={index} reverse />
            ))}
          </Stack>

          // @ts-expect-error TS(2304): Cannot find name 'isMdUp'.
          {isMdUp && <Image alt="benefits" src="/assets/illustrations/illustration_benefits.svg" />}

          // @ts-expect-error TS(2749): 'Stack' refers to a value, but is being used as a ... Remove this comment to see the full error message
          <Stack spacing={{ xs: 4, md: 10 }}>
            {BENEFITS.slice(-3).map((benefit: any, index: any) => (
              // @ts-expect-error TS(2709): Cannot use namespace 'BenefitItem' as a type.
              <BenefitItem key={benefit.title} benefit={benefit} index={index} />
            ))}
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}

// ----------------------------------------------------------------------

function BenefitItem({
  benefit,
  reverse,
  index
}: any) {
  const { title, description, iconColor } = benefit;

  return (
    // @ts-expect-error TS(2749): 'Stack' refers to a value, but is being used as a ... Remove this comment to see the full error message
    <Stack
      // @ts-expect-error TS(2304): Cannot find name 'spacing'.
      spacing={1}
      // @ts-expect-error TS(2304): Cannot find name 'direction'.
      direction={{ xs: 'row', md: reverse ? 'row-reverse' : 'row' }}
      // @ts-expect-error TS(2304): Cannot find name 'sx'.
      sx={{
        // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
        ...(reverse && {
          textAlign: { md: 'right' },
        }),
        // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
        ...(index === 1 && {
          pl: { md: 6 },
          // @ts-expect-error TS(2304): Cannot find name 'reverse'.
          ...(reverse && {
            pl: { md: 0 },
            pr: { md: 6 },
          }),
        }),
      }}
    >
      // @ts-expect-error TS(2749): 'Box' refers to a value, but is being used as a ty... Remove this comment to see the full error message
      <Box
        // @ts-expect-error TS(2304): Cannot find name 'sx'.
        sx={{
          // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
          m: 1,
          // @ts-expect-error TS(2304): Cannot find name 'width'.
          width: 16,
          // @ts-expect-error TS(2304): Cannot find name 'height'.
          height: 16,
          // @ts-expect-error TS(2304): Cannot find name 'flexShrink'.
          flexShrink: 0,
          // @ts-expect-error TS(2304): Cannot find name 'borderRadius'.
          borderRadius: '50%',
          // @ts-expect-error TS(2304): Cannot find name 'background'.
          background: (theme: any) => `linear-gradient(to bottom, ${theme.palette.primary.light}, ${theme.palette.primary.main})`,
          // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
          ...(iconColor === 'secondary' && {
            background: (theme: any) => `linear-gradient(to bottom, ${theme.palette.secondary.light}, ${theme.palette.secondary.main})`,
          }),
          // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
          ...(iconColor === 'success' && {
            background: (theme: any) => `linear-gradient(to bottom, ${theme.palette.success.light}, ${theme.palette.success.main})`,
          }),
        }}
      // @ts-expect-error TS(2365): Operator '<' cannot be applied to types 'RegExp' a... Remove this comment to see the full error message
      />

      // @ts-expect-error TS(2304): Cannot find name 'spacing'.
      <Stack spacing={1}>
        // @ts-expect-error TS(2749): 'Typography' refers to a value, but is being used ... Remove this comment to see the full error message
        <Typography variant="h5">{title}</Typography>

        // @ts-expect-error TS(2304): Cannot find name 'variant'.
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          // @ts-expect-error TS(18004): No value exists in scope for the shorthand propert... Remove this comment to see the full error message
          {description}
        </Typography>
      </Stack>
    </Stack>
  );
}

BenefitItem.propTypes = {
  benefit: PropTypes.shape({
    description: PropTypes.string,
    iconColor: PropTypes.string,
    title: PropTypes.string,
  }),
  index: PropTypes.number,
  reverse: PropTypes.bool,
};
