// next
import Head from 'next/head';
// @mui
import { Box, Stack, Card, Container, CardHeader, CardContent } from '@mui/material';
import { Masonry } from '@mui/lab';
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
// @ts-expect-error TS(2307): Cannot find module 'src/components/custom-breadcru... Remove this comment to see the full error message
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';
// sections
import {
  CarouselBasic1,
  CarouselBasic2,
  CarouselBasic3,
  CarouselBasic4,
  CarouselAnimation,
  CarouselThumbnail,
  CarouselCenterMode,
// @ts-expect-error TS(2307): Cannot find module 'src/sections/examples/carousel... Remove this comment to see the full error message
} from 'src/sections/examples/carousel';

// ----------------------------------------------------------------------

const _carouselsExample = [...Array(5)].map((_, index) => ({
  id: _mock.id(index),
  title: _mock.text.blogTitle(index),
  image: _mock.image.travel(index),
  description: _mock.text.description(index),
}));

// ----------------------------------------------------------------------

DemoCarouselsPage.getLayout = (page: any) => <MainLayout>{page}</MainLayout>;

// ----------------------------------------------------------------------

export default function DemoCarouselsPage() {
  return <>
    // @ts-expect-error TS(2749): 'Head' refers to a value, but is being used as a t... Remove this comment to see the full error message
    <Head>
      // @ts-expect-error TS(2304): Cannot find name 'title'.
      <title>Components: Carousels | ZONE UI</title>
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
          heading="Carousel"
          // @ts-expect-error TS(2304): Cannot find name 'links'.
          links={[
            // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
            {
              name: 'Components',
              href: paths.components.root,
            },
            { name: 'Carousel' },
          ]}
          // @ts-expect-error TS(2304): Cannot find name 'moreLink'.
          moreLink={['https://react-slick.neostack.com']}
        />
      </Container>
    </Box>

    // @ts-expect-error TS(2304): Cannot find name 'sx'.
    <Container sx={{ my: 10 }}>
      // @ts-expect-error TS(2749): 'Masonry' refers to a value, but is being used as ... Remove this comment to see the full error message
      <Masonry columns={{ xs: 1, md: 2 }} spacing={3}>
        // @ts-expect-error TS(2749): 'Card' refers to a value, but is being used as a t... Remove this comment to see the full error message
        <Card>
          // @ts-expect-error TS(2749): 'CardHeader' refers to a value, but is being used ... Remove this comment to see the full error message
          <CardHeader title="Carousel Basic 1" />
          // @ts-expect-error TS(2749): 'CardContent' refers to a value, but is being used... Remove this comment to see the full error message
          <CardContent>
            // @ts-expect-error TS(2304): Cannot find name 'data'.
            <CarouselBasic1 data={_carouselsExample} />
          </CardContent>
        </Card>

        <Card>
          // @ts-expect-error TS(2749): 'CardHeader' refers to a value, but is being used ... Remove this comment to see the full error message
          <CardHeader title="Carousel Basic 2" />
          // @ts-expect-error TS(2749): 'CardContent' refers to a value, but is being used... Remove this comment to see the full error message
          <CardContent>
            // @ts-expect-error TS(2304): Cannot find name 'data'.
            <CarouselBasic2 data={_carouselsExample} />
          </CardContent>
        </Card>

        <Card>
          // @ts-expect-error TS(2749): 'CardHeader' refers to a value, but is being used ... Remove this comment to see the full error message
          <CardHeader title="Carousel Basic 3" />
          // @ts-expect-error TS(2749): 'CardContent' refers to a value, but is being used... Remove this comment to see the full error message
          <CardContent>
            // @ts-expect-error TS(2304): Cannot find name 'data'.
            <CarouselBasic3 data={_carouselsExample} />
          </CardContent>
        </Card>

        <Card>
          // @ts-expect-error TS(2749): 'CardHeader' refers to a value, but is being used ... Remove this comment to see the full error message
          <CardHeader title="Carousel Basic 4" />
          // @ts-expect-error TS(2749): 'CardContent' refers to a value, but is being used... Remove this comment to see the full error message
          <CardContent>
            // @ts-expect-error TS(2304): Cannot find name 'data'.
            <CarouselBasic4 data={_carouselsExample} />
          </CardContent>
        </Card>
      </Masonry>

      // @ts-expect-error TS(2304): Cannot find name 'spacing'.
      <Stack spacing={3}>
        // @ts-expect-error TS(2749): 'Card' refers to a value, but is being used as a t... Remove this comment to see the full error message
        <Card>
          // @ts-expect-error TS(2749): 'CardHeader' refers to a value, but is being used ... Remove this comment to see the full error message
          <CardHeader title="Carousel Thumbnail" />
          // @ts-expect-error TS(2749): 'CardContent' refers to a value, but is being used... Remove this comment to see the full error message
          <CardContent>
            // @ts-expect-error TS(2304): Cannot find name 'data'.
            <CarouselThumbnail data={_carouselsExample} />
          </CardContent>
        </Card>

        <Card>
          // @ts-expect-error TS(2749): 'CardHeader' refers to a value, but is being used ... Remove this comment to see the full error message
          <CardHeader title="Carousel Center Mode" subheader="Customs shape & icon button" />
          // @ts-expect-error TS(2749): 'CardContent' refers to a value, but is being used... Remove this comment to see the full error message
          <CardContent>
            // @ts-expect-error TS(2304): Cannot find name 'data'.
            <CarouselCenterMode data={_carouselsExample} />
          </CardContent>
        </Card>

        <Card>
          // @ts-expect-error TS(2749): 'CardHeader' refers to a value, but is being used ... Remove this comment to see the full error message
          <CardHeader title="Carousel Animation" />
          // @ts-expect-error TS(2749): 'CardContent' refers to a value, but is being used... Remove this comment to see the full error message
          <CardContent>
            // @ts-expect-error TS(2304): Cannot find name 'data'.
            <CarouselAnimation data={_carouselsExample} />
          </CardContent>
        </Card>
      </Stack>
    </Container>
  </>;
}
