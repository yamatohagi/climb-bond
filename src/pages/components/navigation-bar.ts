// next
import Head from 'next/head';
// @mui
import { Box, Container } from '@mui/material';
// routes
// @ts-expect-error TS(2307): Cannot find module 'src/routes/paths' or its corre... Remove this comment to see the full error message
import { paths } from 'src/routes/paths';
// config
// @ts-expect-error TS(2307): Cannot find module 'src/config-global' or its corr... Remove this comment to see the full error message
import { NAV } from 'src/config-global';
// layouts
// @ts-expect-error TS(2307): Cannot find module 'src/layouts/main' or its corre... Remove this comment to see the full error message
import MainLayout from 'src/layouts/main';
// components
// @ts-expect-error TS(2307): Cannot find module 'src/components/iconify' or its... Remove this comment to see the full error message
import Iconify from 'src/components/iconify';
// @ts-expect-error TS(2307): Cannot find module 'src/components/nav-section' or... Remove this comment to see the full error message
import { NavSectionVertical } from 'src/components/nav-section';
// @ts-expect-error TS(2307): Cannot find module 'src/components/custom-breadcru... Remove this comment to see the full error message
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';

// ----------------------------------------------------------------------

DemoNavigationBarPage.getLayout = (page: any) => <MainLayout>{page}</MainLayout>;

// ----------------------------------------------------------------------

export default function DemoNavigationBarPage() {
  return <>
    // @ts-expect-error TS(2749): 'Head' refers to a value, but is being used as a t... Remove this comment to see the full error message
    <Head>
      // @ts-expect-error TS(2304): Cannot find name 'title'.
      <title>Components: Navigation Bar | ZONE UI</title>
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
          heading="Navigation Bar"
          // @ts-expect-error TS(2304): Cannot find name 'links'.
          links={[
            // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
            {
              name: 'Components',
              href: paths.components.root,
            },
            { name: 'Navigation Bar' },
          ]}
        />
      </Container>
    </Box>

    // @ts-expect-error TS(2304): Cannot find name 'sx'.
    <Container sx={{ my: 10 }}>
      <NavSectionVertical
        // @ts-expect-error TS(2304): Cannot find name 'data'.
        data={NAV_ITEMS}
        // @ts-expect-error TS(2304): Cannot find name 'sx'.
        sx={{
          // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
          borderRadius: 2,
          // @ts-expect-error TS(2304): Cannot find name 'bgcolor'.
          bgcolor: 'background.paper',
          // @ts-expect-error TS(2304): Cannot find name 'boxShadow'.
          boxShadow: (theme: any) => theme.customShadows.z24,
          // @ts-expect-error TS(2304): Cannot find name 'width'.
          width: NAV.W_BASE,
        }}
      // @ts-expect-error TS(2365): Operator '<' cannot be applied to types 'boolean' ... Remove this comment to see the full error message
      />
    </Container>
  </>;
}

// ----------------------------------------------------------------------

const NAV_ITEMS = [
  {
    subheader: 'Marketing',
    items: [
      {
        title: 'Landing',
        path: '#',
        // @ts-expect-error TS(2304): Cannot find name 'icon'.
        icon: <Iconify icon="carbon:bat" />,
      },
      {
        title: 'Services',
        path: '#',
        // @ts-expect-error TS(2304): Cannot find name 'icon'.
        icon: <Iconify icon="carbon:cyclist" />,
      },
      {
        title: 'Case Studies',
        path: '#',
        // @ts-expect-error TS(2304): Cannot find name 'icon'.
        icon: <Iconify icon="carbon:3d-cursor-alt" />,
        children: [
          { title: 'Case Studies', path: '#' },
          { title: 'Case Study', path: '#' },
        ],
      },
      {
        title: 'Blog',
        path: '#',
        // @ts-expect-error TS(2304): Cannot find name 'icon'.
        icon: <Iconify icon="carbon:3d-mpr-toggle" />,
        children: [
          { title: 'Blog Posts', path: '#' },
          { title: 'Blog Post', path: '#' },
        ],
      },
      {
        title: 'About',
        path: '#',
        // @ts-expect-error TS(2304): Cannot find name 'icon'.
        icon: <Iconify icon="carbon:airport-01" />,
      },
      {
        title: 'Contact',
        path: '#',
        // @ts-expect-error TS(2304): Cannot find name 'icon'.
        icon: <Iconify icon="carbon:battery-full" />,
      },
      {
        title: 'Tours',
        path: '#',
        // @ts-expect-error TS(2304): Cannot find name 'icon'.
        icon: <Iconify icon="carbon:basketball" />,
        children: [
          { title: 'Tours', path: '#' },
          { title: 'Tour', path: '#' },
        ],
      },
      {
        title: 'Checkout',
        path: '#',
        // @ts-expect-error TS(2304): Cannot find name 'icon'.
        icon: <Iconify icon="carbon:area" />,
        children: [
          { title: 'Checkout', path: '#' },
          { title: 'Checkout Complete', path: '#' },
        ],
      },
    ],
  },
  {
    subheader: 'Travel',
    items: [
      {
        title: 'Level 1',
        path: '#',
        // @ts-expect-error TS(2304): Cannot find name 'icon'.
        icon: <Iconify icon="carbon:play" />,
        children: [
          { title: 'Level 2.1', path: '#' },
          { title: 'Level 2.2', path: '#' },
          {
            title: 'Level 2.3',
            path: '#',
            children: [
              { title: 'Level 3.1', path: '#' },
              { title: 'Level 3.2', path: '#' },
            ],
          },
        ],
      },
    ],
  },
];
