// @mui
import { Typography, Container, Box } from '@mui/material';
// components
// @ts-expect-error TS(2307): Cannot find module 'src/components/svg-color' or i... Remove this comment to see the full error message
import SvgColor from 'src/components/svg-color';

// ----------------------------------------------------------------------

const SERVICES = [
  {
    title: 'Search Engine Optimization',
    description: 'Suspendisse enim turpis, dictum sed, iaculis a, condimentum nec, nisi. ',
    icon: '/assets/icons/ic_statistics.svg',
  },
  {
    title: 'Social Media Strategy',
    description: 'Suspendisse enim turpis, dictum sed, iaculis a, condimentum nec, nisi. ',
    icon: '/assets/icons/ic_social_media.svg',
  },
  {
    title: 'Real Time and Data',
    description: 'Suspendisse enim turpis, dictum sed, iaculis a, condimentum nec, nisi. ',
    icon: '/assets/icons/ic_real_time.svg',
  },
  {
    title: 'Online Media Management',
    description: 'Suspendisse enim turpis, dictum sed, iaculis a, condimentum nec, nisi. ',
    icon: '/assets/icons/ic_checklist.svg',
  },
  {
    title: 'Reporting & Analysis',
    description: 'Suspendisse enim turpis, dictum sed, iaculis a, condimentum nec, nisi. ',
    icon: '/assets/icons/ic_report.svg',
  },
  {
    title: 'Penalty Recovery',
    description: 'Suspendisse enim turpis, dictum sed, iaculis a, condimentum nec, nisi. ',
    icon: '/assets/icons/ic_file.svg',
  },
];

// ----------------------------------------------------------------------

export default function MarketingServicesInclude() {
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
        pb: { xs: 10, md: 15 },
      }}
    >
      // @ts-expect-error TS(2749): 'Typography' refers to a value, but is being used ... Remove this comment to see the full error message
      <Typography variant="h2">Services Include</Typography>

      <Typography
        // @ts-expect-error TS(2304): Cannot find name 'sx'.
        sx={{
          // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
          mt: 3,
          // @ts-expect-error TS(2304): Cannot find name 'mx'.
          mx: 'auto',
          // @ts-expect-error TS(2304): Cannot find name 'maxWidth'.
          maxWidth: 480,
          // @ts-expect-error TS(2304): Cannot find name 'color'.
          color: 'text.secondary',
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
          rowGap: 8,
          // @ts-expect-error TS(2304): Cannot find name 'columnGap'.
          columnGap: 10,
          // @ts-expect-error TS(2304): Cannot find name 'display'.
          display: 'grid',
          // @ts-expect-error TS(2304): Cannot find name 'gridTemplateColumns'.
          gridTemplateColumns: {
            // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
            xs: 'repeat(1, 1fr)',
            // @ts-expect-error TS(2304): Cannot find name 'sm'.
            sm: 'repeat(2, 1fr)',
            // @ts-expect-error TS(2304): Cannot find name 'md'.
            md: 'repeat(3, 1fr)',
          },
        }}
      >
        // @ts-expect-error TS(2362): The left-hand side of an arithmetic operation must... Remove this comment to see the full error message
        {SERVICES.map((value: any) => <div key={value.title}>
          <SvgColor
            // @ts-expect-error TS(2304): Cannot find name 'src'.
            src={value.icon}
            // @ts-expect-error TS(2304): Cannot find name 'color'.
            color="info"
            // @ts-expect-error TS(2304): Cannot find name 'sx'.
            sx={{ width: 64, height: 64, mx: 'auto', bgcolor: 'primary.main' }}
          />

          // @ts-expect-error TS(2749): 'Typography' refers to a value, but is being used ... Remove this comment to see the full error message
          <Typography variant="h5" sx={{ mt: 5, mb: 2 }}>
            // @ts-expect-error TS(18004): No value exists in scope for the shorthand propert... Remove this comment to see the full error message
            {value.title}
          </Typography>

          // @ts-expect-error TS(2304): Cannot find name 'sx'.
          <Typography sx={{ color: 'text.secondary' }}> {value.description} </Typography>
        </div>)}
      </Box>
    </Container>
  );
}
