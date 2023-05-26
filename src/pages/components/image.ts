// next
import Head from 'next/head';
// @mui
import { Box, Card, Container, Typography, CardHeader } from '@mui/material';
// routes
// @ts-expect-error TS(2307): Cannot find module 'src/routes/paths' or its corre... Remove this comment to see the full error message
import { paths } from 'src/routes/paths';
// _mock
// @ts-expect-error TS(2307): Cannot find module 'src/_mock' or its correspondin... Remove this comment to see the full error message
import _mock from 'src/_mock';
// layouts
// @ts-expect-error TS(2307): Cannot find module 'src/layouts/main' or its corre... Remove this comment to see the full error message
import MainLayout from 'src/layouts/main';
// components
// @ts-expect-error TS(2307): Cannot find module 'src/components/image' or its c... Remove this comment to see the full error message
import Image from 'src/components/image';
// @ts-expect-error TS(2307): Cannot find module 'src/components/custom-breadcru... Remove this comment to see the full error message
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';

// ----------------------------------------------------------------------

const RATIO = ['4/3', '3/4', '6/4', '4/6', '16/9', '9/16', '21/9', '9/21', '1/1'];

const IMAGES = RATIO.map((value, index) => ({
  value,
  url: _mock.image.travel(index + 1),
}));

// ----------------------------------------------------------------------

DemoImagePage.getLayout = (page: any) => <MainLayout>{page}</MainLayout>;

// ----------------------------------------------------------------------

export default function DemoImagePage() {
  return <>
    // @ts-expect-error TS(2749): 'Head' refers to a value, but is being used as a t... Remove this comment to see the full error message
    <Head>
      // @ts-expect-error TS(2304): Cannot find name 'title'.
      <title>Components: Image | ZONE UI</title>
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
          heading="Image"
          // @ts-expect-error TS(2304): Cannot find name 'links'.
          links={[
            // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
            {
              name: 'Components',
              href: paths.components.root,
            },
            { name: 'Image' },
          ]}
        />
      </Container>
    </Box>

    // @ts-expect-error TS(2304): Cannot find name 'sx'.
    <Container sx={{ my: 10 }}>
      // @ts-expect-error TS(2749): 'Card' refers to a value, but is being used as a t... Remove this comment to see the full error message
      <Card>
        // @ts-expect-error TS(2749): 'CardHeader' refers to a value, but is being used ... Remove this comment to see the full error message
        <CardHeader title="Image Aspect Ratio" />
        // @ts-expect-error TS(2749): 'Box' refers to a value, but is being used as a ty... Remove this comment to see the full error message
        <Box
          // @ts-expect-error TS(2304): Cannot find name 'gap'.
          gap={3}
          // @ts-expect-error TS(2304): Cannot find name 'display'.
          display="grid"
          // @ts-expect-error TS(2304): Cannot find name 'gridTemplateColumns'.
          gridTemplateColumns={{
            // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
            xs: 'repeat(2, 1fr)',
            // @ts-expect-error TS(2304): Cannot find name 'sm'.
            sm: 'repeat(3, 1fr)',
            // @ts-expect-error TS(2304): Cannot find name 'md'.
            md: 'repeat(4, 1fr)',
          }}
          // @ts-expect-error TS(2304): Cannot find name 'sx'.
          sx={{ p: 3 }}
        // @ts-expect-error TS(2365): Operator '>' cannot be applied to types 'boolean' ... Remove this comment to see the full error message
        >
          // @ts-expect-error TS(2749): 'Box' refers to a value, but is being used as a ty... Remove this comment to see the full error message
          {IMAGES.map((img: any) => <Box key={img.value}>
            // @ts-expect-error TS(2749): 'Typography' refers to a value, but is being used ... Remove this comment to see the full error message
            <Typography variant="overline" sx={{ color: 'text.secondary' }}>
              // @ts-expect-error TS(18004): No value exists in scope for the shorthand propert... Remove this comment to see the full error message
              {img.value}
            </Typography>

            <Image
              // @ts-expect-error TS(2304): Cannot find name 'disabledEffect'.
              disabledEffect
              // @ts-expect-error TS(2304): Cannot find name 'alt'.
              alt={img.value}
              // @ts-expect-error TS(2304): Cannot find name 'src'.
              src={img.url}
              // @ts-expect-error TS(2304): Cannot find name 'ratio'.
              ratio={img.value}
              // @ts-expect-error TS(2304): Cannot find name 'sx'.
              sx={{ borderRadius: 1 }}
            // @ts-expect-error TS(2365): Operator '<' cannot be applied to types 'boolean' ... Remove this comment to see the full error message
            />
          </Box>)}
        </Box>
      </Card>
    </Container>
  </>;
}
