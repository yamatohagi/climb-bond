// next
import Head from 'next/head';
// @mui
import { Box, Card, CardHeader, Container, CardContent } from '@mui/material';
// routes
// @ts-expect-error TS(2307): Cannot find module 'src/routes/paths' or its corre... Remove this comment to see the full error message
import { paths } from 'src/routes/paths';
// layouts
// @ts-expect-error TS(2307): Cannot find module 'src/layouts/main' or its corre... Remove this comment to see the full error message
import MainLayout from 'src/layouts/main';
// components
// @ts-expect-error TS(2307): Cannot find module 'src/components/scrollbar' or i... Remove this comment to see the full error message
import Scrollbar from 'src/components/scrollbar';
// @ts-expect-error TS(2307): Cannot find module 'src/components/custom-breadcru... Remove this comment to see the full error message
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';

// ----------------------------------------------------------------------

DemoScrollbarPage.getLayout = (page: any) => <MainLayout>{page}</MainLayout>;

// ----------------------------------------------------------------------

export default function DemoScrollbarPage() {
  return <>
    // @ts-expect-error TS(2749): 'Head' refers to a value, but is being used as a t... Remove this comment to see the full error message
    <Head>
      // @ts-expect-error TS(2304): Cannot find name 'title'.
      <title>Components: Scrollbar | ZONE UI</title>
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
          heading="Scrollbar"
          // @ts-expect-error TS(2304): Cannot find name 'links'.
          links={[
            // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
            {
              name: 'Components',
              href: paths.components.root,
            },
            { name: 'Scrollbar' },
          ]}
        />
      </Container>
    </Box>

    // @ts-expect-error TS(2304): Cannot find name 'sx'.
    <Container sx={{ my: 10 }}>
      // @ts-expect-error TS(2749): 'Box' refers to a value, but is being used as a ty... Remove this comment to see the full error message
      <Box
        // @ts-expect-error TS(2304): Cannot find name 'gap'.
        gap={3}
        // @ts-expect-error TS(2304): Cannot find name 'display'.
        display="grid"
        // @ts-expect-error TS(2304): Cannot find name 'alignItems'.
        alignItems="flex-start"
        // @ts-expect-error TS(2304): Cannot find name 'gridTemplateColumns'.
        gridTemplateColumns={{
          // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
          xs: 'repeat(1, 1fr)',
          // @ts-expect-error TS(2304): Cannot find name 'md'.
          md: 'repeat(2, 1fr)',
        }}
      >
        // @ts-expect-error TS(2749): 'Card' refers to a value, but is being used as a t... Remove this comment to see the full error message
        <Card>
          // @ts-expect-error TS(2749): 'CardHeader' refers to a value, but is being used ... Remove this comment to see the full error message
          <CardHeader title="Vertical" />
          // @ts-expect-error TS(2749): 'CardContent' refers to a value, but is being used... Remove this comment to see the full error message
          <CardContent sx={{ height: 320 }}>
            <Scrollbar>
              // @ts-expect-error TS(2304): Cannot find name 'Donec'.
              Donec mi odio, faucibus at, scelerisque quis, convallis in, nisi. Quisque ut nisi.
              // @ts-expect-error TS(2304): Cannot find name 'Suspendisse'.
              Suspendisse nisl elit, rhoncus eget, elementum ac, condimentum eget, diam.
              // @ts-expect-error TS(2304): Cannot find name 'Vestibulum'.
              Vestibulum eu odio. Proin sapien ipsum, porta a, auctor quis, euismod ut, mi. Cras
              // @ts-expect-error TS(2304): Cannot find name 'ultricies'.
              ultricies mi eu turpis hendrerit fringilla. Phasellus consectetuer vestibulum elit.
              // @ts-expect-error TS(2304): Cannot find name 'Phasellus'.
              Phasellus magna. Nullam tincidunt adipiscing enim. Vestibulum volutpat pretium
              // @ts-expect-error TS(2304): Cannot find name 'libero'.
              libero. Nullam quis ante. Morbi mollis tellus ac sapien. Donec orci lectus, aliquam
              // @ts-expect-error TS(2304): Cannot find name 'ut'.
              ut, faucibus non, euismod id, nulla. Pellentesque habitant morbi tristique senectus
              // @ts-expect-error TS(2304): Cannot find name 'et'.
              et netus et malesuada fames ac turpis egestas. Fusce ac felis sit amet ligula
              // @ts-expect-error TS(2304): Cannot find name 'pharetra'.
              pharetra condimentum. Morbi mattis ullamcorper velit. Vivamus consectetuer hendrerit
              // @ts-expect-error TS(2304): Cannot find name 'lacus'.
              lacus. Nullam quis ante. Praesent turpis. Praesent porttitor, nulla vitae posuere
              // @ts-expect-error TS(2304): Cannot find name 'iaculis'.
              iaculis, arcu nisl dignissim dolor, a pretium mi sem ut ipsum. Donec mi odio,
              // @ts-expect-error TS(2304): Cannot find name 'faucibus'.
              faucibus at, scelerisque quis, convallis in, nisi. Quisque ut nisi. Suspendisse nisl
              // @ts-expect-error TS(2304): Cannot find name 'elit'.
              elit, rhoncus eget, elementum ac, condimentum eget, diam. Vestibulum eu odio. Proin
              // @ts-expect-error TS(2304): Cannot find name 'sapien'.
              sapien ipsum, porta a, auctor quis, euismod ut, mi. Cras ultricies mi eu turpis
              // @ts-expect-error TS(2304): Cannot find name 'hendrerit'.
              hendrerit fringilla. Phasellus consectetuer vestibulum elit. Phasellus magna. Nullam
              // @ts-expect-error TS(2304): Cannot find name 'tincidunt'.
              tincidunt adipiscing enim. Vestibulum volutpat pretium libero. Nullam quis ante.
              // @ts-expect-error TS(2304): Cannot find name 'Morbi'.
              Morbi mollis tellus ac sapien. Donec orci lectus, aliquam ut, faucibus non, euismod
              // @ts-expect-error TS(2304): Cannot find name 'id'.
              id, nulla. Pellentesque habitant morbi tristique senectus et netus et malesuada
              // @ts-expect-error TS(2304): Cannot find name 'fames'.
              fames ac turpis egestas. Fusce ac felis sit amet ligula pharetra condimentum. Morbi
              // @ts-expect-error TS(2304): Cannot find name 'mattis'.
              mattis ullamcorper velit. Vivamus consectetuer hendrerit lacus. Nullam quis ante.
              // @ts-expect-error TS(2304): Cannot find name 'Praesent'.
              Praesent turpis. Praesent porttitor, nulla vitae posuere iaculis, arcu nisl
              // @ts-expect-error TS(2304): Cannot find name 'dignissim'.
              dignissim dolor, a pretium mi sem ut ipsum.
            </Scrollbar>
          </CardContent>
        </Card>

        <Card>
          // @ts-expect-error TS(2749): 'CardHeader' refers to a value, but is being used ... Remove this comment to see the full error message
          <CardHeader title="Horizontal" />
          // @ts-expect-error TS(2749): 'CardContent' refers to a value, but is being used... Remove this comment to see the full error message
          <CardContent>
            <Scrollbar>
              // @ts-expect-error TS(2749): 'Box' refers to a value, but is being used as a ty... Remove this comment to see the full error message
              <Box sx={{ width: '200%' }}>
                // @ts-expect-error TS(2304): Cannot find name 'Donec'.
                Donec mi odio, faucibus at, scelerisque quis, convallis in, nisi. Quisque ut nisi.
                // @ts-expect-error TS(2304): Cannot find name 'Suspendisse'.
                Suspendisse nisl elit, rhoncus eget, elementum ac, condimentum eget, diam.
                // @ts-expect-error TS(2304): Cannot find name 'Vestibulum'.
                Vestibulum eu odio. Proin sapien ipsum, porta a, auctor quis, euismod ut, mi. Cras
                // @ts-expect-error TS(2304): Cannot find name 'ultricies'.
                ultricies mi eu turpis hendrerit fringilla. Phasellus consectetuer vestibulum
                // @ts-expect-error TS(2304): Cannot find name 'elit'.
                elit. Phasellus magna. Nullam tincidunt adipiscing enim. Vestibulum volutpat
                // @ts-expect-error TS(2304): Cannot find name 'pretium'.
                pretium libero. Nullam quis ante. Morbi mollis tellus ac sapien. Donec orci
                // @ts-expect-error TS(2304): Cannot find name 'lectus'.
                lectus, aliquam ut, faucibus non, euismod id, nulla. Pellentesque habitant morbi
                // @ts-expect-error TS(2304): Cannot find name 'tristique'.
                tristique senectus et netus et malesuada fames ac turpis egestas. Fusce ac felis
                // @ts-expect-error TS(2304): Cannot find name 'sit'.
                sit amet ligula pharetra condimentum. Morbi mattis ullamcorper velit. Vivamus
                // @ts-expect-error TS(2304): Cannot find name 'consectetuer'.
                consectetuer hendrerit lacus. Nullam quis ante. Praesent turpis. Praesent
                // @ts-expect-error TS(2304): Cannot find name 'porttitor'.
                porttitor, nulla vitae posuere iaculis, arcu nisl dignissim dolor, a pretium mi
                // @ts-expect-error TS(2304): Cannot find name 'sem'.
                sem ut ipsum. Donec mi odio, faucibus at, scelerisque quis, convallis in, nisi.
                // @ts-expect-error TS(2304): Cannot find name 'Quisque'.
                Quisque ut nisi. Suspendisse nisl elit, rhoncus eget, elementum ac, condimentum
                // @ts-expect-error TS(2304): Cannot find name 'eget'.
                eget, diam. Vestibulum eu odio. Proin sapien ipsum, porta a, auctor quis, euismod
                // @ts-expect-error TS(2304): Cannot find name 'ut'.
                ut, mi. Cras ultricies mi eu turpis hendrerit fringilla. Phasellus consectetuer
                // @ts-expect-error TS(2304): Cannot find name 'vestibulum'.
                vestibulum elit. Phasellus magna. Nullam tincidunt adipiscing enim. Vestibulum
                // @ts-expect-error TS(2304): Cannot find name 'volutpat'.
                volutpat pretium libero. Nullam quis ante. Morbi mollis tellus ac sapien. Donec
                // @ts-expect-error TS(2304): Cannot find name 'orci'.
                orci lectus, aliquam ut, faucibus non, euismod id, nulla. Pellentesque habitant
                // @ts-expect-error TS(2304): Cannot find name 'morbi'.
                morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce ac
                // @ts-expect-error TS(2304): Cannot find name 'felis'.
                felis sit amet ligula pharetra condimentum. Morbi mattis ullamcorper velit.
                // @ts-expect-error TS(2304): Cannot find name 'Vivamus'.
                Vivamus consectetuer hendrerit lacus. Nullam quis ante. Praesent turpis. Praesent
                // @ts-expect-error TS(2304): Cannot find name 'porttitor'.
                porttitor, nulla vitae posuere iaculis, arcu nisl dignissim dolor, a pretium mi
                // @ts-expect-error TS(2304): Cannot find name 'sem'.
                sem ut ipsum.
              </Box>
            </Scrollbar>
          </CardContent>
        </Card>
      </Box>
    </Container>
  </>;
}
