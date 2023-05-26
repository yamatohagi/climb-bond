// next
import Head from 'next/head';
// @mui
import { Box, Container, Typography, Stack } from '@mui/material';
// utils
// @ts-expect-error TS(2307): Cannot find module 'src/utils/formatNumber' or its... Remove this comment to see the full error message
import { fShortenNumber } from 'src/utils/formatNumber';
// routes
// @ts-expect-error TS(2307): Cannot find module 'src/routes/paths' or its corre... Remove this comment to see the full error message
import { paths } from 'src/routes/paths';
// layouts
// @ts-expect-error TS(2307): Cannot find module 'src/layouts/main' or its corre... Remove this comment to see the full error message
import MainLayout from 'src/layouts/main';
// components
// @ts-expect-error TS(2307): Cannot find module 'src/components/custom-breadcru... Remove this comment to see the full error message
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';
// @ts-expect-error TS(2307): Cannot find module 'src/components/count-up' or it... Remove this comment to see the full error message
import CountUp from 'src/components/count-up';

// ----------------------------------------------------------------------

const SUMMARY = [
  { name: 'Jobs', number: 2230000 },
  { name: 'Successful Hiring', number: 500000 },
  { name: 'Partners', number: 250 },
  { name: 'Employee', number: 1560 },
];

// ----------------------------------------------------------------------

DemoCountUpPage.getLayout = (page: any) => <MainLayout>{page}</MainLayout>;

// ----------------------------------------------------------------------

export default function DemoCountUpPage() {
  return <>
    // @ts-expect-error TS(2749): 'Head' refers to a value, but is being used as a t... Remove this comment to see the full error message
    <Head>
      // @ts-expect-error TS(2304): Cannot find name 'title'.
      <title>Components: CountUp | ZONE UI</title>
    </Head>

    <Box
      // @ts-expect-error TS(2304): Cannot find name 'sx'.
      sx={{
        // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
        pt: 6,
        // @ts-expect-error TS(2304): Cannot find name 'pb'.
        pb: 1,
        // @ts-expect-error TS(2304): Cannot find name 'bgcolor'.
        bgcolor: (theme: any) => theme.palette.mode === 'light' ? 'grey.200' : 'grey.800',
      }}
    >
      // @ts-expect-error TS(2749): 'Container' refers to a value, but is being used a... Remove this comment to see the full error message
      <Container>
        <CustomBreadcrumbs
          // @ts-expect-error TS(2304): Cannot find name 'heading'.
          heading="CountUp"
          // @ts-expect-error TS(2304): Cannot find name 'links'.
          links={[
            // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
            {
              name: 'Components',
              href: paths.components.root,
            },
            { name: 'CountUp' },
          ]}
          // @ts-expect-error TS(2304): Cannot find name 'moreLink'.
          moreLink={['https://www.npmjs.com/package/react-countup']}
        />
      </Container>
    </Box>

    // @ts-expect-error TS(2304): Cannot find name 'sx'.
    <Container sx={{ my: 10 }}>
      // @ts-expect-error TS(2749): 'Stack' refers to a value, but is being used as a ... Remove this comment to see the full error message
      <Stack spacing={5} direction="row" alignItems="center">
        // @ts-expect-error TS(2362): The left-hand side of an arithmetic operation must... Remove this comment to see the full error message
        {SUMMARY.map((value: any) => <div key={value.name}>
          // @ts-expect-error TS(2749): 'Typography' refers to a value, but is being used ... Remove this comment to see the full error message
          <Typography variant="h2" gutterBottom>
            <CountUp
              // @ts-expect-error TS(2304): Cannot find name 'start'.
              start={value.number / 5}
              // @ts-expect-error TS(2304): Cannot find name 'end'.
              end={value.number}
              // @ts-expect-error TS(2304): Cannot find name 'formattingFn'.
              formattingFn={(newValue) => fShortenNumber(newValue)}
            />

            // @ts-expect-error TS(2749): 'Typography' refers to a value, but is being used ... Remove this comment to see the full error message
            <Typography variant="h3" component="span" sx={{ verticalAlign: 'top', ml: 0.5 }}>
              +
            </Typography>
          </Typography>

          // @ts-expect-error TS(2304): Cannot find name 'variant'.
          <Typography variant="subtitle2" sx={{ color: 'text.secondary' }}>
            // @ts-expect-error TS(18004): No value exists in scope for the shorthand propert... Remove this comment to see the full error message
            {value.name}
          </Typography>
        </div>)}
      </Stack>
    </Container>
  </>;
}
