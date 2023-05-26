import { useState } from 'react';
// next
import Head from 'next/head';
// @mui
import { Box, Container, Tab, Tabs } from '@mui/material';
// routes
// @ts-expect-error TS(2307): Cannot find module 'src/routes/paths' or its corre... Remove this comment to see the full error message
import { paths } from 'src/routes/paths';
// layouts
// @ts-expect-error TS(2307): Cannot find module 'src/layouts/main' or its corre... Remove this comment to see the full error message
import MainLayout from 'src/layouts/main';
// components
// @ts-expect-error TS(2307): Cannot find module 'src/components/custom-breadcru... Remove this comment to see the full error message
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';
// sections
import {
  Inview,
  OtherView,
  ScrollView,
  DialogView,
  BackgroundView,
  // @ts-expect-error TS(2307): Cannot find module 'src/sections/examples/animate'... Remove this comment to see the full error message
} from 'src/sections/examples/animate';

// ----------------------------------------------------------------------

const TABS = [
  { value: 'inview', label: 'In View', component: <Inview /> },
  { value: 'scroll', label: 'Scroll', component: <ScrollView /> },
  { value: 'dialog', label: 'Dialog', component: <DialogView /> },
  { value: 'background', label: 'Background', component: <BackgroundView /> },
  { value: 'other', label: 'Other', component: <OtherView /> },
];

// ----------------------------------------------------------------------

DemoAnimatePage.getLayout = (page: any) => <MainLayout>{page}</MainLayout>;

// ----------------------------------------------------------------------

export default function DemoAnimatePage() {
  const [currentTab, setCurrentTab] = useState('inview');

  return (
    <>
      <Head>
        <title>Components: Animate | ZONE UI</title>
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
            heading="Animate"
            links={[
              {
                name: 'Components',
                href: paths.components.root,
              },
              { name: 'Animate' },
            ]}
            moreLink={['https://www.framer.com/api/motion']}
          />
        </Container>
      </Box>

      <Container sx={{ my: 10 }}>
        <Tabs value={currentTab} onChange={(event, newValue) => setCurrentTab(newValue)}>
          {TABS.map((tab) => (
            <Tab key={tab.value} value={tab.value} label={tab.label} />
          ))}
        </Tabs>

        {TABS.map(
          (tab) =>
            tab.value === currentTab && (
              <Box key={tab.value} sx={{ mt: 5 }}>
                {tab.component}
              </Box>
            )
        )}
      </Container>
    </>
  );
}
