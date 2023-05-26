import { useState } from 'react';
// next
import Head from 'next/head';
// @mui
import { Box, Card, Stack, Container, AppBar, Typography, Button } from '@mui/material';
// routes
// @ts-expect-error TS(2307): Cannot find module 'src/routes/paths' or its corre... Remove this comment to see the full error message
import { paths } from 'src/routes/paths';
// @ts-expect-error TS(2307): Cannot find module 'src/config-global' or its corr... Remove this comment to see the full error message
import { NAV } from 'src/config-global';
// _mock
// @ts-expect-error TS(2307): Cannot find module 'src/_mock' or its correspondin... Remove this comment to see the full error message
import _mock from 'src/_mock';
// layouts
// @ts-expect-error TS(2307): Cannot find module 'src/layouts/main' or its corre... Remove this comment to see the full error message
import MainLayout from 'src/layouts/main';
// components
// @ts-expect-error TS(2307): Cannot find module 'src/components/image' or its c... Remove this comment to see the full error message
import Image from 'src/components/image';
// @ts-expect-error TS(2307): Cannot find module 'src/components/iconify' or its... Remove this comment to see the full error message
import Iconify from 'src/components/iconify';
// @ts-expect-error TS(2307): Cannot find module 'src/components/custom-breadcru... Remove this comment to see the full error message
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';
import {
  MegaMenuMobile,
  MegaMenuDesktopHorizon,
  MegaMenuDesktopVertical,
  // @ts-expect-error TS(2307): Cannot find module 'src/components/mega-menu' or i... Remove this comment to see the full error message
} from 'src/components/mega-menu';

// ----------------------------------------------------------------------

DemoMegaMenuPage.getLayout = (page: any) => <MainLayout>{page}</MainLayout>;

// ----------------------------------------------------------------------

export default function DemoMegaMenuPage() {
  const [openMenuMobile, setOpenMenuMobile] = useState(false);

  return (
    <>
      <Head>
        <title>Components: Mega Menu | ZONE UI</title>
      </Head>

      <Box
        sx={{
          pt: 6,
          pb: 1,
          bgcolor: (theme) => (theme.palette.mode === 'light' ? 'grey.200' : 'grey.800'),
        }}
      >
        <Container>
          <CustomBreadcrumbs
            heading="Mega Menu"
            links={[
              {
                name: 'Components',
                href: paths.components.root,
              },
              { name: 'Mega Menu' },
            ]}
          />
        </Container>
      </Box>

      <AppBar
        position="static"
        color="transparent"
        sx={{
          // @ts-expect-error TS(2339): Property 'customShadows' does not exist on type 'T... Remove this comment to see the full error message
          boxShadow: (theme) => theme.customShadows.z8,
        }}
      >
        <Container sx={{ display: 'flex', alignItems: 'center', position: 'relative' }}>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Menu Horizon
          </Typography>

          <MegaMenuDesktopHorizon data={data} />
        </Container>
      </AppBar>

      <Container sx={{ my: 10 }}>
        <MegaMenuMobile
          data={data}
          open={openMenuMobile}
          onOpen={() => setOpenMenuMobile(true)}
          onClose={() => setOpenMenuMobile(false)}
          action={
            <Button
              color="inherit"
              variant="contained"
              onClick={() => setOpenMenuMobile(true)}
              startIcon={<Iconify icon="carbon:menu" />}
            >
              Menu Mobile
            </Button>
          }
        />

        <Stack direction="row" spacing={3} mt={5}>
          <Card sx={{ width: NAV.W_BASE, flexShrink: 0, overflow: 'unset', zIndex: 9 }}>
            <Typography variant="h6" sx={{ p: 2, display: 'flex', alignItems: 'center' }}>
              <Iconify icon="eva:list-fill" width={24} sx={{ mr: 1 }} /> Menu Vertical
            </Typography>

            <MegaMenuDesktopVertical data={data} />
          </Card>

          <Image
            alt="any photo"
            src={_mock.image.travel(1)}
            ratio="21/9"
            sx={{ borderRadius: 1 }}
          />
        </Stack>
      </Container>
    </>
  );
}

// MOCK DATA
// ----------------------------------------------------------------------

const PRODUCTS = [...Array(10)].map((_, index) => ({
  name: _mock.text.blogTitle(index),
  image: _mock.image.travel(index),
  path: '#',
}));

const TAGS = [
  { name: 'Paper Cup', path: '#' },
  { name: 'Lotion Pump', path: '#' },
  { name: 'Brush Cutter', path: '#' },
  { name: 'Display Rack', path: '#' },
  { name: 'Glass Bottle', path: '#' },
];

const data = [
  {
    title: 'Parent 1',
    path: '#',
    icon: <Iconify icon="carbon:accessibility-alt" sx={{ width: 1, height: 1 }} />,
    more: { title: 'More Categories', path: '#' },
    products: PRODUCTS,
    tags: TAGS,
    children: [
      {
        subheader: 'Other Machinery & Parts',
        items: [
          { title: 'Metallic Processing Machinery', path: '#' },
          { title: 'Machinery for Food, Beverage & Cereal', path: '#' },
          { title: 'Laser Equipment', path: '#' },
          { title: 'Mould', path: '#' },
          { title: 'Textile Machinery & Parts', path: '#' },
          { title: 'Cutting & Fold-bend Machine', path: '#' },
          { title: 'Paper Machinery', path: '#' },
          { title: 'Rubber Machinery', path: '#' },
          { title: 'Chemical Equipment & Machinery', path: '#' },
          { title: 'Mixing Equipment', path: '#' },
          { title: 'Machinery for Garment, Shoes & Accessories', path: '#' },
          { title: 'Crushing & Culling Machine', path: '#' },
        ],
      },
      {
        subheader: 'Plastic & Woodworking',
        items: [
          { title: 'Plastic Machinery', path: '#' },
          { title: 'Woodworking Machinery', path: '#' },
          { title: 'Blow Molding Machine', path: '#' },
          { title: 'Plastic Recycling Machine', path: '#' },
          { title: 'Injection Molding Machine', path: '#' },
        ],
      },
      {
        subheader: 'Construction Machinery',
        items: [
          { title: 'Building Material Making Machinery', path: '#' },
          { title: 'Lifting Equipment', path: '#' },
          { title: 'Excavator', path: '#' },
          { title: 'Concrete Machinery', path: '#' },
          { title: 'Stone Processing Machinery', path: '#' },
        ],
      },
      {
        subheader: 'Agriculture Machinery',
        items: [
          { title: 'Agriculture Machinery', path: '#' },
          { title: 'Livestock MachineryFeed', path: '#' },
          { title: 'Feed Processing Machinery', path: '#' },
          { title: 'Tiller', path: '#' },
          { title: 'Harvesting Machine', path: '#' },
        ],
      },
      {
        subheader: 'Machine Tools',
        items: [
          { title: 'CNC Machine Tools', path: '#' },
          { title: 'Lathe', path: '#' },
          { title: 'Grinding Machine ', path: '#' },
          { title: 'Drilling Machine ', path: '#' },
          { title: 'Milling Machine ', path: '#' },
        ],
      },
    ],
  },
  {
    title: 'Parent 2',
    path: '#',
    icon: <Iconify icon="carbon:airplay" sx={{ width: 1, height: 1 }} />,
    more: { title: 'More Categories', path: '#' },
    products: PRODUCTS,
    tags: TAGS,
    children: [
      {
        subheader: 'Other Machinery & Parts',
        items: [
          { title: 'Metallic Processing Machinery', path: '#' },
          { title: 'Machinery for Food, Beverage & Cereal', path: '#' },
          { title: 'Laser Equipment', path: '#' },
          { title: 'Mould', path: '#' },
          { title: 'Textile Machinery & Parts', path: '#' },
          { title: 'Cutting & Fold-bend Machine', path: '#' },
          { title: 'Paper Machinery', path: '#' },
          { title: 'Rubber Machinery', path: '#' },
          { title: 'Chemical Equipment & Machinery', path: '#' },
          { title: 'Mixing Equipment', path: '#' },
          { title: 'Machinery for Garment, Shoes & Accessories', path: '#' },
          { title: 'Crushing & Culling Machine', path: '#' },
        ],
      },
      {
        subheader: 'Plastic & Woodworking',
        items: [
          { title: 'Plastic Machinery', path: '#' },
          { title: 'Woodworking Machinery', path: '#' },
          { title: 'Blow Molding Machine', path: '#' },
          { title: 'Plastic Recycling Machine', path: '#' },
          { title: 'Injection Molding Machine', path: '#' },
        ],
      },
      {
        subheader: 'Construction Machinery',
        items: [
          { title: 'Building Material Making Machinery', path: '#' },
          { title: 'Lifting Equipment', path: '#' },
          { title: 'Excavator', path: '#' },
          { title: 'Concrete Machinery', path: '#' },
          { title: 'Stone Processing Machinery', path: '#' },
        ],
      },
      {
        subheader: 'Agriculture Machinery',
        items: [
          { title: 'Agriculture Machinery', path: '#' },
          { title: 'Livestock MachineryFeed', path: '#' },
          { title: 'Feed Processing Machinery', path: '#' },
          { title: 'Tiller', path: '#' },
          { title: 'Harvesting Machine', path: '#' },
        ],
      },
      {
        subheader: 'Machine Tools',
        items: [
          { title: 'CNC Machine Tools', path: '#' },
          { title: 'Lathe', path: '#' },
          { title: 'Grinding Machine ', path: '#' },
          { title: 'Drilling Machine ', path: '#' },
          { title: 'Milling Machine ', path: '#' },
        ],
      },
    ],
  },
  {
    title: 'Parent 3',
    path: '#',
    icon: <Iconify icon="carbon:api" sx={{ width: 1, height: 1 }} />,
  },
  {
    title: 'Parent 4',
    path: '#',
    icon: <Iconify icon="carbon:basketball" sx={{ width: 1, height: 1 }} />,
  },
];
