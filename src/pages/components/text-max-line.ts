// next
import Head from 'next/head';
// @mui
import Masonry from '@mui/lab/Masonry';
import { Box, Card, CardHeader, Container, CardContent } from '@mui/material';
// routes
// @ts-expect-error TS(2307): Cannot find module 'src/routes/paths' or its corre... Remove this comment to see the full error message
import { paths } from 'src/routes/paths';
// layouts
// @ts-expect-error TS(2307): Cannot find module 'src/layouts/main' or its corre... Remove this comment to see the full error message
import MainLayout from 'src/layouts/main';
// components
// @ts-expect-error TS(2307): Cannot find module 'src/components/text-max-line' ... Remove this comment to see the full error message
import TextMaxLine from 'src/components/text-max-line';
// @ts-expect-error TS(2307): Cannot find module 'src/components/custom-breadcru... Remove this comment to see the full error message
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';

// ----------------------------------------------------------------------

DemoTextMaxLinePage.getLayout = (page: any) => <MainLayout>{page}</MainLayout>;

// ----------------------------------------------------------------------

export default function DemoTextMaxLinePage() {
  return <>
    // @ts-expect-error TS(2749): 'Head' refers to a value, but is being used as a t... Remove this comment to see the full error message
    <Head>
      // @ts-expect-error TS(2304): Cannot find name 'title'.
      <title>Components: Text Max Line | ZONE UI</title>
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
          heading="TextMaxLine"
          // @ts-expect-error TS(2304): Cannot find name 'links'.
          links={[
            // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
            {
              name: 'Components',
              href: paths.components.root,
            },
            { name: 'TextMaxLine' },
          ]}
        />
      </Container>
    </Box>

    // @ts-expect-error TS(2304): Cannot find name 'sx'.
    <Container sx={{ my: 10 }}>
      // @ts-expect-error TS(2749): 'Masonry' refers to a value, but is being used as ... Remove this comment to see the full error message
      <Masonry columns={3} spacing={3}>
        // @ts-expect-error TS(2749): 'Card' refers to a value, but is being used as a t... Remove this comment to see the full error message
        <Card>
          // @ts-expect-error TS(2749): 'CardHeader' refers to a value, but is being used ... Remove this comment to see the full error message
          <CardHeader title="1 Line" />
          // @ts-expect-error TS(2749): 'CardContent' refers to a value, but is being used... Remove this comment to see the full error message
          <CardContent>
            // @ts-expect-error TS(2304): Cannot find name 'line'.
            <TextMaxLine line={1}>
              // @ts-expect-error TS(2304): Cannot find name 'Donec'.
              Donec posuere vulputate arcu. Fusce vulputate eleifend sapien. Phasellus magna.
              // @ts-expect-error TS(2304): Cannot find name 'Proin'.
              Proin sapien ipsum, porta a, auctor quis, euismod ut, mi. Suspendisse faucibus, nunc
              // @ts-expect-error TS(2304): Cannot find name 'et'.
              et pellentesque egestas, lacus ante convallis tellus, vitae iaculis lacus elit id
              // @ts-expect-error TS(2304): Cannot find name 'tortor'.
              tortor.
            </TextMaxLine>
          </CardContent>
        </Card>

        <Card>
          // @ts-expect-error TS(2749): 'CardHeader' refers to a value, but is being used ... Remove this comment to see the full error message
          <CardHeader title="2 Line" />
          // @ts-expect-error TS(2749): 'CardContent' refers to a value, but is being used... Remove this comment to see the full error message
          <CardContent>
            <TextMaxLine>
              // @ts-expect-error TS(2304): Cannot find name 'Donec'.
              Donec posuere vulputate arcu. Fusce vulputate eleifend sapien. Phasellus magna.
              // @ts-expect-error TS(2304): Cannot find name 'Proin'.
              Proin sapien ipsum, porta a, auctor quis, euismod ut, mi. Suspendisse faucibus, nunc
              // @ts-expect-error TS(2304): Cannot find name 'et'.
              et pellentesque egestas, lacus ante convallis tellus, vitae iaculis lacus elit id
              // @ts-expect-error TS(2304): Cannot find name 'tortor'.
              tortor.
            </TextMaxLine>
          </CardContent>
        </Card>

        <Card>
          // @ts-expect-error TS(2749): 'CardHeader' refers to a value, but is being used ... Remove this comment to see the full error message
          <CardHeader title="3 Line" />
          // @ts-expect-error TS(2749): 'CardContent' refers to a value, but is being used... Remove this comment to see the full error message
          <CardContent>
            // @ts-expect-error TS(2304): Cannot find name 'line'.
            <TextMaxLine line={3}>
              // @ts-expect-error TS(2304): Cannot find name 'Donec'.
              Donec posuere vulputate arcu. Fusce vulputate eleifend sapien. Phasellus magna.
              // @ts-expect-error TS(2304): Cannot find name 'Proin'.
              Proin sapien ipsum, porta a, auctor quis, euismod ut, mi. Suspendisse faucibus, nunc
              // @ts-expect-error TS(2304): Cannot find name 'et'.
              et pellentesque egestas, lacus ante convallis tellus, vitae iaculis lacus elit id
              // @ts-expect-error TS(2304): Cannot find name 'tortor'.
              tortor.
            </TextMaxLine>
          </CardContent>
        </Card>

        <Card>
          // @ts-expect-error TS(2749): 'CardHeader' refers to a value, but is being used ... Remove this comment to see the full error message
          <CardHeader title="4 Line" />
          // @ts-expect-error TS(2749): 'CardContent' refers to a value, but is being used... Remove this comment to see the full error message
          <CardContent>
            // @ts-expect-error TS(2304): Cannot find name 'line'.
            <TextMaxLine line={4}>
              // @ts-expect-error TS(2304): Cannot find name 'Donec'.
              Donec posuere vulputate arcu. Fusce vulputate eleifend sapien. Phasellus magna.
              // @ts-expect-error TS(2304): Cannot find name 'Proin'.
              Proin sapien ipsum, porta a, auctor quis, euismod ut, mi. Suspendisse faucibus, nunc
              // @ts-expect-error TS(2304): Cannot find name 'et'.
              et pellentesque egestas, lacus ante convallis tellus, vitae iaculis lacus elit id
              // @ts-expect-error TS(2304): Cannot find name 'tortor'.
              tortor.
            </TextMaxLine>
          </CardContent>
        </Card>

        <Card>
          // @ts-expect-error TS(2749): 'CardHeader' refers to a value, but is being used ... Remove this comment to see the full error message
          <CardHeader title="As Link" />
          // @ts-expect-error TS(2749): 'CardContent' refers to a value, but is being used... Remove this comment to see the full error message
          <CardContent>
            // @ts-expect-error TS(2304): Cannot find name 'asLink'.
            <TextMaxLine asLink line={3} href="#" color="primary" sx={{ maxWidth: 300 }}>
              // @ts-expect-error TS(2304): Cannot find name 'Donec'.
              Donec posuere vulputate arcu. Fusce vulputate eleifend sapien. Phasellus magna.
              // @ts-expect-error TS(2304): Cannot find name 'Proin'.
              Proin sapien ipsum, porta a, auctor quis, euismod ut, mi. Suspendisse faucibus, nunc
              // @ts-expect-error TS(2304): Cannot find name 'et'.
              et pellentesque egestas, lacus ante convallis tellus, vitae iaculis lacus elit id
              // @ts-expect-error TS(2304): Cannot find name 'tortor'.
              tortor.
            </TextMaxLine>
          </CardContent>
        </Card>

        <Card>
          // @ts-expect-error TS(2749): 'CardHeader' refers to a value, but is being used ... Remove this comment to see the full error message
          <CardHeader title="Persistent" />
          // @ts-expect-error TS(2749): 'CardContent' refers to a value, but is being used... Remove this comment to see the full error message
          <CardContent>
            // @ts-expect-error TS(2304): Cannot find name 'persistent'.
            <TextMaxLine persistent line={3} href="#" sx={{ bgcolor: 'background.neutral' }}>
              // @ts-expect-error TS(2304): Cannot find name 'Donec'.
              Donec posuere vulputate arcu.
            </TextMaxLine>
          </CardContent>
        </Card>
      </Masonry>
    </Container>
  </>;
}
