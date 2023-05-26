// @mui
import { Typography, Container, Box } from '@mui/material';
// components
// @ts-expect-error TS(2307): Cannot find module 'src/components/svg-color' or i... Remove this comment to see the full error message
import SvgColor from 'src/components/svg-color';

// ----------------------------------------------------------------------

const CORE_VALUES = [
  {
    title: 'Customer Satisfaction',
    description: 'Aenean urna dictum adipiscing nec, cras quisque.',
    icon: '/assets/icons/ic_agreement.svg',
  },
  {
    title: 'Transparency',
    description: 'Aenean urna dictum adipiscing nec, cras quisque.',
    icon: '/assets/icons/ic_transparency.svg',
  },
  {
    title: 'Reputation',
    description: 'Aenean urna dictum adipiscing nec, cras quisque.',
    icon: '/assets/icons/ic_reputation.svg',
  },
  {
    title: 'Cooperation',
    description: 'Aenean urna dictum adipiscing nec, cras quisque.',
    icon: '/assets/icons/ic_popularity.svg',
  },
];

// ----------------------------------------------------------------------

export default function MarketingAboutCoreValues() {
  return (
    // @ts-expect-error TS(2749): 'Container' refers to a value, but is being used a... Remove this comment to see the full error message
    <Container
      // @ts-expect-error TS(2304): Cannot find name 'sx'.
      sx={{
        // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
        textAlign: 'center',
        // @ts-expect-error TS(2304): Cannot find name 'pt'.
        pt: { xs: 5, md: 10 },
        // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
        pb: { xs: 5, md: 15 },
      }}
    >
      // @ts-expect-error TS(2749): 'Typography' refers to a value, but is being used ... Remove this comment to see the full error message
      <Typography variant="h2" sx={{ mb: { xs: 8, md: 10 } }}>
        // @ts-expect-error TS(2304): Cannot find name 'Our'.
        Our Core Values
      </Typography>

      <Box
        // @ts-expect-error TS(2304): Cannot find name 'sx'.
        sx={{
          // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
          display: 'grid',
          // @ts-expect-error TS(2304): Cannot find name 'gap'.
          gap: 8,
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
      >
        // @ts-expect-error TS(2362): The left-hand side of an arithmetic operation must... Remove this comment to see the full error message
        {CORE_VALUES.map((value: any) => <Box key={value.title}>
          <SvgColor
            // @ts-expect-error TS(2304): Cannot find name 'src'.
            src={value.icon}
            // @ts-expect-error TS(2304): Cannot find name 'sx'.
            sx={{ width: 64, height: 64, mx: 'auto', color: 'primary.main' }}
          />

          // @ts-expect-error TS(2749): 'Typography' refers to a value, but is being used ... Remove this comment to see the full error message
          <Typography variant="h5" sx={{ mt: 5, mb: 2 }}>
            // @ts-expect-error TS(18004): No value exists in scope for the shorthand propert... Remove this comment to see the full error message
            {value.title}
          </Typography>

          // @ts-expect-error TS(2304): Cannot find name 'sx'.
          <Typography sx={{ color: 'text.secondary' }}> {value.description} </Typography>
        </Box>)}
      </Box>
    </Container>
  );
}
